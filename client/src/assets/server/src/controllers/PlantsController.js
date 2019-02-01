const {Plant} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const plants = await Plant.findAll({
        limit: 10
      })
      res.send(plants)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Fetch Failed)'
        })
    }
  },

  async post (req, res) {
    try{
      const plant = await Plant.create(req.body)
      res.send(plant)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const plant = await Plant.findById(req.params.plantId)
      if(!plant)
        res.status(404).send({
          error: 'No such data'
        })
      res.send(plant)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const plant = await Plant.update(req.body,{
        where: {
          id: req.params.plantId
        }
      })
      if(plant==0)
        res.status(404).send({
          error: 'No such data'
        })
      res.send(req.body)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Update Failed)'
        })
    }
  },

  async delete (req, res) {
    try{
      const plant = await Plant.destroy({
        where: {
          id: req.params.plantId
        }
      })
      if(plant==0)
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