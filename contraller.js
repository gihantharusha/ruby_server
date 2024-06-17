const Remember = require("./remember_model");
const Todo = require("./todo_model");
const RememberMe = require("./remember_me_model");
const Web = require("./web_model");
const Contacts = require("./contacts_model");
const Secrete = require("./secrete_model");
const Friends = require("./friends_model");
const Words = require("./words_model");
const Persons = require("./persons_model");
const Animal = require("./animals_model");
const Place = require("./place_model");
const axios = require("axios");
const url = "https://stopwordapi.com/api/v1/stopwords?langs=en&categories=4";

//Remember

const addRemember = async (req, res) => {
  const request = "  " + req.query.data;

  //text process

  const lowerCase = request.toLowerCase();
  const withoutSimble = lowerCase.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );
  const withoutRemember = withoutSimble.replace(" remember ", "");
  const withoutRuby = withoutRemember.replace(" ruby ", "");

  //grammer process

  const iToYou = withoutRuby.replace(" i ", " you ");
  const myToYour = iToYou.replace(" my ", " your ");
  const imToyouAre = myToYour.replace(" im ", " you are ").trim();

  await Remember.find({ data: imToyouAre }).then((response) => {
    if (response.length == 0) {
      console.log("Ok sir i'll save it");

      const remember = new Remember({
        data: imToyouAre,
      });

      remember.save().then((response2) => {
        console.log(response2);
      });
    } else {
      console.log("I know about that");
    }
  });

  var split = imToyouAre.split(" ");

  await axios.get(url).then((response) => {
    response.data.map((e) => {
      delete split[split.indexOf(e)];
    });
  });

  await Words.find().then((response) => {
    response.map((e) => {
      delete split[split.indexOf(e.word)];
    });
  });

  await Friends.find().then((response) => {
    response.map((e) => {
      split.map((i) => {
        if (e.name == i) {
          delete split[split.indexOf(i)];
        }
      });
    });
  });

  await Persons.find().then((response) => {
    response.map((e) => {
      split.map((i) => {
        if (e.name == i) {
          delete split[split.indexOf(i)];
        }
      });
    });
  });

  await Animal.find().then((response) => {
    response.map((e) => {
      split.map((i) => {
        if (e.name == i) {
          delete split[split.indexOf(i)];
        }
      });
    });
  });

  await Place.find().then((response) => {
    response.map((e) => {
      split.map((i) => {
        if (e.name == i) {
          delete split[split.indexOf(i)];
        }
      });
    });
  });

  var response = new Array();

  split.map((e) => {
    response.push(e);
  });

  res.send(response);
};

const search = async (req, res) => {
  const input = " " + req.query.data + "";

  //text processing

  const simple = input.toLowerCase();
  const withoutSymbol = simple.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );
  const withoutKeyword = withoutSymbol.replace(" search about ", " ");
  const withoutRuby = withoutKeyword.replace("ruby", " ");

  //grammer processing

  const iToYou = withoutRuby.replace(" i ", " you ");
  const myToYour = iToYou.replace(" my ", " your ");
  const imToYouAre = myToYour.replace(" im ", " you are ");
  const withoutWhiteSpace = imToYouAre.trim();

  const split = withoutWhiteSpace.split(" ");

  await axios.get(url).then((response) => {
    response.data.map((e) => {
      delete split[split.indexOf(e)];
    });
  });

  const data_from_databae = new Array();

  await Remember.find().then((response) => {
    response.map((e) => {
      split.map((i) => {
        if (e.data.search(i) >= 0) {
          data_from_databae.push(e.data);
        }
      });
    });
  });

  const result = new Array();

  data_from_databae.map((e) => {
    var count = 0;
    split.map((i) => {
      if (e.search(i) >= 0) {
        count = count + 1;
      }
    });

    if (count == split.flat().length) {
      result.push(e);
    }
  });

  const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };
  console.log(split);
  console.log(removeDuplicates(result));
  res.send(removeDuplicates(result))
};

//Todo

const addTodo = async (req, res)=>{
  const input = " " + req.query.input
  const simpleInput = input.toLowerCase()
  const iToYou = simple.replace(" i ", " you ")
  const myToYour = iToYou.replace(" my ", " your ")
  
  const withOutRuby = myToYour.replace(" ruby " ,"")
  
  //todo
  
  const withOutAddTodo = withOutRuby.replace("add todo that", "").trim()
  const withOutSymble = withOutAddTodo.replace(  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
  const withOutNumbers = withOutSymble.replace(/[0-9]/g, "").trim()
  const the_todo = withOutNumbers.replace('in', "").trim()
  
  //date
  
  const withOutTodo = withOutAddTodo.replace(the_todo, "")
  const date = withOutTodo.replace("in", "").trim()
  
  
//   console.log(`todo is ${the_todo} date is ${withOutIn}`);
  
  const todo = new Todo({
    todo: the_todo,
    date: date,
    finish: false
  })

  todo.save()
  .then(response=>{
    console.log(response)
  })

}

const viewTodo = async(req, res)=>{
  let obj = new Date()
  let date = obj.getDate()
  let month = obj.getMonth()+1
  let year = obj.getFullYear()
 
  await Todo.find({date: `${year}/${month}/${date}`})
  .then(response=>{
    res.send(response)
  })

}

const getTodoInDate = async(req, res)=>{
    const input = " " + req.query.input
    const simple = input.toLowerCase()
    const withOutRuby = simple.replace(" ruby ", "")
    const withOutKeyWord = withOutRuby.replace("show todos in", "").trim()
    const date = withOutKeyWord.replace("undefined", "").trim()
    // console.log(withOuterr)
    
    await Todo.find({date:date })
    .then(response=>{
        res.send(response)
    })
    
}

const viewAllTodo = async(req, res)=>{
  await Todo.find()
  .then(response=>{
    res.send(response)
  })
}

//Remember me

const addRememberMe = async(req, res)=>{

  const input = " " + req.query.input
  const simple = input.toLowerCase()
  const iToYou = simple.replace(" i ", " you ")
  const myToYour = iToYou.replace(" my ", " your ")
  const withOutRuby = myToYour.replace(" ruby ", "")
  
  //data
  const withOutKeyWord = withOutRuby.replace("remember me that", "").trim()
  const withOutSymble = withOutKeyWord.replace(  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
  const withOutNumbers = withOutSymble.replace(/[0-9]/g, "").trim()
  const data = withOutNumbers.replace('in', "").trim()
  
  //date
  const withOutData = withOutKeyWord.replace(data, "")
  const date = withOutData.replace("in", "").trim()
  
    
  const remember_me = new RememberMe({
    data: data,
    date: date
  })

  await remember_me.save()
  .then(response=>{
    console.log(response)
  })
}

const getRememberMe = async(req, res)=>{
  let obj = new Date()
  let date = obj.getDate()
  let month = obj.getMonth() + 1
  let year = obj.getFullYear()

  await RememberMe.find({date: `${year}/${month}/${date}`})
  .then(response=>{
    res.send(response)
  })
}

module.exports = {
  addRemember,
  search,
  addTodo,
  viewTodo,
  getTodoInDate,
  viewAllTodo,
  addRememberMe,
  getRememberMe
};
