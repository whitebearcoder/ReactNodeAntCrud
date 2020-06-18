const { User } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

export const create = async function (req, res) {
  let [err, user] = await to(User.create(req.body));
  if (err) ReE(res, { err }, 422);

  ReS(res, { user }, 201);
};

export const get = async function (req, res) {
  if (req.params.id === 'all') {
    let [err, users] = await to(User.findAll());
    if (err) ReE(res, { err }, 422);
    ReS(res, { users }, 201);
  } else {
    let [err, user] = await to(User.findOne({ where: { id: req.params.id } }));
    if (err) ReE(res, { err }, 422);
    ReS(res, { user }, 201);
  }
};

export const update = async function (req, res) {
  let [errFind, userFind] = await to(User.findOne({ where: req.params.id }));
  if (errFind) ReE(res, 'Not Found!', 422);
  userFind.set({
    ...req.body,
  });
  let [err, user] = await to(userFind.save());
  if (err) ReE(res, err, 422);
  ReS(res, { user }, 201);
};

export const remove = async function (req, res) {
  let err, user;
  [err, user] = await to(User.destroy({ where: { id: req.params.id } }));
  if (err) return ReE(res, 'error occured trying to delete the user');
  if (!user) return ReE(res, 'Not Found!', 422);
  return ReS(res, { message: 'Deleted User' }, 201);
};
