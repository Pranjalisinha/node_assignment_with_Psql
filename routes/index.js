const express = require('express');
const router = express.Router();
const ClassDataModel = require('../models/classInfo');

router.get('/', async (req, res, next) => {
  const topicData = await ClassDataModel.getAllTopicData();
  const topicStatusList = await ClassDataModel.getAllClassStatus();

  res.render('template', { 
    locals: {
      title: 'Class Topic Ranking',
      topicData: topicData,
      topicStatusList: topicStatusList
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.post('/update', (req, res) => {
  console.log(req.body);

  for(let key in req.body) {
    ClassDataModel.update(key, req.body[key]);
  }

  res.status(200).redirect('/');
});


module.exports = router;