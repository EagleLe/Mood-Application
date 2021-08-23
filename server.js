const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});




//app.use(require("./routes/api.js"));
app.use(routes);

const PORT=process.env.PORT||5000;
app.listen(PORT, () => {
    console.log('App running on port '+PORT);
});