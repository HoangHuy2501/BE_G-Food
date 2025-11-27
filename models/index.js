const UserModel = require('./UserModel');
const RoleModel = require('./RoleModel');
const PermissionModel = require('./PermissionModel');
const UserRoleModel = require('./User_RoleModel');
const RolePermissionModel = require('./Role_PermissionModel');
const CategoryModel = require('./CategoryModel');
const PostNewsShareModel = require('./PostNewsShareModel');
const PostImageModel = require('./PostImageModel');
const CommentModel = require('./CommentModel');
const ExpressionModel = require('./ExpressionModel');
const PostExpressionModel = require('./PostExpressionModel');
const ReceivePostModel = require('./ReceivePostModel');
const MapModel = require('./MapModel');

/* -------------------- Relations -------------------- */

// User - Role (N-N)
UserModel.belongsToMany(RoleModel, { through: UserRoleModel, foreignKey: 'userid' });
RoleModel.belongsToMany(UserModel, { through: UserRoleModel, foreignKey: 'roleid' });

// Role - Permission (N-N)
RoleModel.belongsToMany(PermissionModel, { through: RolePermissionModel, foreignKey: 'roleid' });
PermissionModel.belongsToMany(RoleModel, { through: RolePermissionModel, foreignKey: 'permissionid' });
// User - Post_news_share (1-N)
UserModel.hasMany(PostNewsShareModel, { foreignKey: 'userid' });
PostNewsShareModel.belongsTo(UserModel, { foreignKey: 'userid' });

// Category - Post_news_share (1-N)
CategoryModel.hasMany(PostNewsShareModel, { foreignKey: 'categoryid' });
PostNewsShareModel.belongsTo(CategoryModel, { foreignKey: 'categoryid' });
// Post_news_share - Post_image (1-N)
PostNewsShareModel.hasMany(PostImageModel, { foreignKey: 'postshareid' });
PostImageModel.belongsTo(PostNewsShareModel, { foreignKey: 'postshareid' });

// Post_news_share - Comment (1-N)
PostNewsShareModel.hasMany(CommentModel, { foreignKey: 'postshareid' });
CommentModel.belongsTo(PostNewsShareModel, { foreignKey: 'postshareid' });
// User - Comment (1-N)
UserModel.hasMany(CommentModel, { foreignKey: 'userid' });
CommentModel.belongsTo(UserModel, { foreignKey: 'userid' });



// Post_news_share - Post_expression (1-N)
PostNewsShareModel.hasMany(PostExpressionModel, { foreignKey: 'postshareid' });
PostExpressionModel.belongsTo(PostNewsShareModel, { foreignKey: 'postshareid' });


// User - Post_expression (1-N)
UserModel.hasMany(PostExpressionModel, { foreignKey: 'userid' });
PostExpressionModel.belongsTo(UserModel, { foreignKey: 'userid' });

// Expression - Post_expression (1-N)
ExpressionModel.hasMany(PostExpressionModel, { foreignKey: 'expressionid' });
PostExpressionModel.belongsTo(ExpressionModel, { foreignKey: 'expressionid' });
// Receive_post (1-1 với Post_news_share)
PostNewsShareModel.hasOne(ReceivePostModel, { foreignKey: 'id' });
ReceivePostModel.belongsTo(PostNewsShareModel, { foreignKey: 'id' });

// User - Receive_post (1-N)
UserModel.hasMany(ReceivePostModel, { foreignKey: 'userid' });
ReceivePostModel.belongsTo(UserModel, { foreignKey: 'userid' });

// User - Map (1-N)
UserModel.hasMany(MapModel, { foreignKey: 'userID' });
MapModel.belongsTo(UserModel, { foreignKey: 'userID' });

/* ------------------ EXPORT ------------------ */
module.exports = {
  UserModel,
  RoleModel,
  PermissionModel,
  UserRoleModel,
  RolePermissionModel,
  CategoryModel,
  PostNewsShareModel,
  PostImageModel,
  CommentModel,
  ExpressionModel,
  PostExpressionModel,
  ReceivePostModel,
  MapModel
};
