const {Fish} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const fishes = await Fish.findAll({
        limit: 10
      })
      res.send(fishes)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Fetch Failed)'
        })
    }
  },

  async post (req, res) {
    try{
      const fish = await Fish.create(req.body)
      res.send(fish)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const fish = await Fish.findById(req.params.fishId)
      if(!fish)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(fish)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const fish = await Fish.update(req.body,{
        where: {
          id: req.params.fishId
        }
      })
      if(fish==0)
        res.status(404).send({
          error: 'No such data'
        })
      res.status(200).send(req.body)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Update Failed)'
        })
    }
  },

  async delete (req, res) {
    try{
      const fish = await Fish.destroy({
        where: {
          id: req.params.fishId
        }
      })
      if(fish==0)
        res.status(404).send({
          error: 'No such data'
        })
      res.send({
        success: 'Sucessfully Deleted'
      })
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Update Failed)'
        })
    }
  }
}