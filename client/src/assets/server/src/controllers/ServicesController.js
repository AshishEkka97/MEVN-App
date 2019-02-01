const {Service} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const services = await Service.findAll({
        limit: 10
      })
      res.send(services)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Fetch Failed)'
        })
    }
  },

  async post (req, res) {
    try{
      const service = await Service.create(req.body)
      res.send(service)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Create Failed)'
        })
    }
  },

  async show (req, res) {
    try{
      const service = await Service.findById(req.params.serviceId)
      if(!service)
        res.status(404).send({
          error: 'No such data'
        })
      res.send(service)
    } catch (err) {
      return res.status(500).send({
          error: 'Server Error (Read Failed)'
        })
    }
  },

  async put (req, res) {
    try{
      const service = await Service.update(req.body,{
        where: {
          id: req.params.serviceId
        }
      })
      if(service==0)
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
      const service = await Service.destroy({
        where: {
          id: req.params.serviceId
        }
      })
      if(service==0)
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