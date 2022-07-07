/*
 Navicat Premium Data Transfer

 Source Server         : zheye
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : youqu

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 07/07/2022 21:21:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_log`;
CREATE TABLE `sys_log`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '唯一ID',
  `opt_id` int NULL DEFAULT NULL COMMENT '操作用户id',
  `opt_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '操作用户名',
  `log_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '日志类型',
  `log_message` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '日志信息（具体方法名）',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 263 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统日志表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_log
-- ----------------------------
INSERT INTO `sys_log` VALUES (3, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-11 14:33:42');
INSERT INTO `sys_log` VALUES (4, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-11 14:34:13');
INSERT INTO `sys_log` VALUES (5, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-11 14:34:19');
INSERT INTO `sys_log` VALUES (17, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:33:57');
INSERT INTO `sys_log` VALUES (18, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:38:21');
INSERT INTO `sys_log` VALUES (19, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:38:21');
INSERT INTO `sys_log` VALUES (20, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:38:21');
INSERT INTO `sys_log` VALUES (21, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:38:21');
INSERT INTO `sys_log` VALUES (22, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:38:22');
INSERT INTO `sys_log` VALUES (23, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:38:24');
INSERT INTO `sys_log` VALUES (24, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:40:32');
INSERT INTO `sys_log` VALUES (25, 9, '88888888@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2020-04-12 22:42:39');
INSERT INTO `sys_log` VALUES (26, 9, '88888888@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2020-04-12 22:42:54');
INSERT INTO `sys_log` VALUES (27, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:43:10');
INSERT INTO `sys_log` VALUES (28, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2020-04-12 22:44:01');
INSERT INTO `sys_log` VALUES (29, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:52:00');
INSERT INTO `sys_log` VALUES (30, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:52:37');
INSERT INTO `sys_log` VALUES (31, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 22:55:41');
INSERT INTO `sys_log` VALUES (32, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:40:23');
INSERT INTO `sys_log` VALUES (33, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:35');
INSERT INTO `sys_log` VALUES (34, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:36');
INSERT INTO `sys_log` VALUES (35, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:36');
INSERT INTO `sys_log` VALUES (36, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:36');
INSERT INTO `sys_log` VALUES (37, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:36');
INSERT INTO `sys_log` VALUES (38, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:36');
INSERT INTO `sys_log` VALUES (39, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-12 23:44:38');
INSERT INTO `sys_log` VALUES (40, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:00');
INSERT INTO `sys_log` VALUES (41, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:00');
INSERT INTO `sys_log` VALUES (42, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:00');
INSERT INTO `sys_log` VALUES (43, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:00');
INSERT INTO `sys_log` VALUES (44, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:01');
INSERT INTO `sys_log` VALUES (45, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:04');
INSERT INTO `sys_log` VALUES (46, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 00:22:05');
INSERT INTO `sys_log` VALUES (47, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 10:38:22');
INSERT INTO `sys_log` VALUES (48, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 10:40:03');
INSERT INTO `sys_log` VALUES (49, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 10:50:42');
INSERT INTO `sys_log` VALUES (50, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 10:51:09');
INSERT INTO `sys_log` VALUES (51, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 10:51:10');
INSERT INTO `sys_log` VALUES (52, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 10:51:26');
INSERT INTO `sys_log` VALUES (53, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 10:51:28');
INSERT INTO `sys_log` VALUES (54, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 10:52:18');
INSERT INTO `sys_log` VALUES (55, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2020-04-13 10:52:41');
INSERT INTO `sys_log` VALUES (56, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2020-04-13 10:53:00');
INSERT INTO `sys_log` VALUES (57, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:00:58');
INSERT INTO `sys_log` VALUES (58, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:03:14');
INSERT INTO `sys_log` VALUES (59, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:03:39');
INSERT INTO `sys_log` VALUES (60, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 11:03:42');
INSERT INTO `sys_log` VALUES (61, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:04:03');
INSERT INTO `sys_log` VALUES (62, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:04:03');
INSERT INTO `sys_log` VALUES (63, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:04:04');
INSERT INTO `sys_log` VALUES (64, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:04:06');
INSERT INTO `sys_log` VALUES (65, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:04:09');
INSERT INTO `sys_log` VALUES (66, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:05:42');
INSERT INTO `sys_log` VALUES (67, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:05:54');
INSERT INTO `sys_log` VALUES (68, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2020-04-13 11:06:23');
INSERT INTO `sys_log` VALUES (69, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:10:10');
INSERT INTO `sys_log` VALUES (70, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:15:38');
INSERT INTO `sys_log` VALUES (71, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:16:04');
INSERT INTO `sys_log` VALUES (72, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 11:16:08');
INSERT INTO `sys_log` VALUES (73, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:16:17');
INSERT INTO `sys_log` VALUES (74, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:16:22');
INSERT INTO `sys_log` VALUES (75, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2020-04-13 11:17:30');
INSERT INTO `sys_log` VALUES (76, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:22:37');
INSERT INTO `sys_log` VALUES (77, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:24:29');
INSERT INTO `sys_log` VALUES (78, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:26:23');
INSERT INTO `sys_log` VALUES (79, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:27:08');
INSERT INTO `sys_log` VALUES (80, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 11:27:12');
INSERT INTO `sys_log` VALUES (81, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:27:19');
INSERT INTO `sys_log` VALUES (82, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:27:21');
INSERT INTO `sys_log` VALUES (83, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:30:25');
INSERT INTO `sys_log` VALUES (84, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:31:10');
INSERT INTO `sys_log` VALUES (85, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 11:31:12');
INSERT INTO `sys_log` VALUES (86, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:31:17');
INSERT INTO `sys_log` VALUES (87, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:31:19');
INSERT INTO `sys_log` VALUES (88, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:33:31');
INSERT INTO `sys_log` VALUES (89, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2020-04-13 11:33:34');
INSERT INTO `sys_log` VALUES (90, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:33:54');
INSERT INTO `sys_log` VALUES (91, 8, '664650322@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2020-04-13 11:33:56');
INSERT INTO `sys_log` VALUES (92, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2020-04-13 11:34:02');
INSERT INTO `sys_log` VALUES (93, 8, '664650322@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2020-04-13 11:34:03');
INSERT INTO `sys_log` VALUES (94, 8, '664650322@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2020-04-13 11:35:08');
INSERT INTO `sys_log` VALUES (95, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2020-04-13 11:36:56');
INSERT INTO `sys_log` VALUES (96, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2020-04-13 12:06:40');
INSERT INTO `sys_log` VALUES (97, 17, 'hzhjy123@gmail.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 09:22:41');
INSERT INTO `sys_log` VALUES (98, 15, 'herojim@outlook.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-18 09:23:37');
INSERT INTO `sys_log` VALUES (99, 15, 'herojim@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:24:28');
INSERT INTO `sys_log` VALUES (100, 1, '664650333@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:25:11');
INSERT INTO `sys_log` VALUES (101, NULL, NULL, '注册', 'cn.zdxh.user.controller.TUserController.register', '2022-05-18 09:41:28');
INSERT INTO `sys_log` VALUES (102, 15, '1027796553@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 09:41:49');
INSERT INTO `sys_log` VALUES (103, 15, '1027796553@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-18 09:42:45');
INSERT INTO `sys_log` VALUES (104, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:48:59');
INSERT INTO `sys_log` VALUES (105, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:49:41');
INSERT INTO `sys_log` VALUES (106, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:49:45');
INSERT INTO `sys_log` VALUES (107, NULL, NULL, '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 邮箱不允许为空', '2022-05-18 09:49:45');
INSERT INTO `sys_log` VALUES (108, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:51:04');
INSERT INTO `sys_log` VALUES (109, NULL, NULL, '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 密码不允许为空', '2022-05-18 09:51:04');
INSERT INTO `sys_log` VALUES (110, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:51:32');
INSERT INTO `sys_log` VALUES (111, 17, 'hzhjy123@gmail.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 09:54:02');
INSERT INTO `sys_log` VALUES (112, 17, 'hzhjy123@gmail.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-18 09:54:52');
INSERT INTO `sys_log` VALUES (113, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 09:57:08');
INSERT INTO `sys_log` VALUES (114, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 10:23:36');
INSERT INTO `sys_log` VALUES (115, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 10:27:27');
INSERT INTO `sys_log` VALUES (116, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 10:27:27');
INSERT INTO `sys_log` VALUES (117, 8, '664650322@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-18 10:27:27');
INSERT INTO `sys_log` VALUES (118, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:32:00');
INSERT INTO `sys_log` VALUES (119, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 邮箱不允许为空', '2022-05-19 17:32:00');
INSERT INTO `sys_log` VALUES (120, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:33:26');
INSERT INTO `sys_log` VALUES (121, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 邮箱不允许为空', '2022-05-19 17:33:26');
INSERT INTO `sys_log` VALUES (122, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:33:26');
INSERT INTO `sys_log` VALUES (123, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 密码不允许为空', '2022-05-19 17:33:26');
INSERT INTO `sys_log` VALUES (124, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:34:14');
INSERT INTO `sys_log` VALUES (125, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 邮箱不允许为空', '2022-05-19 17:34:14');
INSERT INTO `sys_log` VALUES (126, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:50:24');
INSERT INTO `sys_log` VALUES (127, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:50:24');
INSERT INTO `sys_log` VALUES (128, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:50:28');
INSERT INTO `sys_log` VALUES (129, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:50:28');
INSERT INTO `sys_log` VALUES (130, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:50:46');
INSERT INTO `sys_log` VALUES (131, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:50:46');
INSERT INTO `sys_log` VALUES (132, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:50:49');
INSERT INTO `sys_log` VALUES (133, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:50:49');
INSERT INTO `sys_log` VALUES (134, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:51:01');
INSERT INTO `sys_log` VALUES (135, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:51:01');
INSERT INTO `sys_log` VALUES (136, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:51:06');
INSERT INTO `sys_log` VALUES (137, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:51:06');
INSERT INTO `sys_log` VALUES (138, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:51:14');
INSERT INTO `sys_log` VALUES (139, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:51:14');
INSERT INTO `sys_log` VALUES (140, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:51:22');
INSERT INTO `sys_log` VALUES (141, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:51:22');
INSERT INTO `sys_log` VALUES (142, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:51:25');
INSERT INTO `sys_log` VALUES (143, 8, '664650322@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 17:51:25');
INSERT INTO `sys_log` VALUES (144, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 17:59:24');
INSERT INTO `sys_log` VALUES (145, 15, '1027796553@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2022-05-19 18:52:12');
INSERT INTO `sys_log` VALUES (146, 15, '1027796553@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-19 18:52:13');
INSERT INTO `sys_log` VALUES (147, 15, '1027796553@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 19:22:51');
INSERT INTO `sys_log` VALUES (148, 15, '1027796553@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-19 19:22:51');
INSERT INTO `sys_log` VALUES (149, 15, '1027796553@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-19 19:22:59');
INSERT INTO `sys_log` VALUES (150, 9, '88888888@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-19 19:27:19');
INSERT INTO `sys_log` VALUES (151, 9, '88888888@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-19 19:31:36');
INSERT INTO `sys_log` VALUES (152, 9, '88888888@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-19 22:02:53');
INSERT INTO `sys_log` VALUES (153, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-20 08:08:08');
INSERT INTO `sys_log` VALUES (154, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 22:44:08');
INSERT INTO `sys_log` VALUES (155, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 22:47:38');
INSERT INTO `sys_log` VALUES (156, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 22:53:31');
INSERT INTO `sys_log` VALUES (157, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-20 22:53:57');
INSERT INTO `sys_log` VALUES (158, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 22:56:12');
INSERT INTO `sys_log` VALUES (159, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 23:12:19');
INSERT INTO `sys_log` VALUES (160, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 23:12:52');
INSERT INTO `sys_log` VALUES (161, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 23:13:11');
INSERT INTO `sys_log` VALUES (162, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 23:13:21');
INSERT INTO `sys_log` VALUES (163, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-20 23:13:40');
INSERT INTO `sys_log` VALUES (164, 2, 'admin', '删除', 'cn.zdxh.invitation.controller.TTopicController.delete', '2022-05-20 23:13:44');
INSERT INTO `sys_log` VALUES (165, 9, '88888888@qq.com', '注册', 'cn.zdxh.user.controller.TUserController.register', '2022-05-21 04:18:48');
INSERT INTO `sys_log` VALUES (166, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:19:12');
INSERT INTO `sys_log` VALUES (167, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:19:12');
INSERT INTO `sys_log` VALUES (168, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:19:29');
INSERT INTO `sys_log` VALUES (169, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 04:20:48');
INSERT INTO `sys_log` VALUES (170, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:21:11');
INSERT INTO `sys_log` VALUES (171, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 邮箱不允许为空', '2022-05-21 04:21:11');
INSERT INTO `sys_log` VALUES (172, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:21:40');
INSERT INTO `sys_log` VALUES (173, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:21:40');
INSERT INTO `sys_log` VALUES (174, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:21:48');
INSERT INTO `sys_log` VALUES (175, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:21:48');
INSERT INTO `sys_log` VALUES (176, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:21:56');
INSERT INTO `sys_log` VALUES (177, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 04:24:43');
INSERT INTO `sys_log` VALUES (178, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 04:28:03');
INSERT INTO `sys_log` VALUES (179, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 04:28:09');
INSERT INTO `sys_log` VALUES (180, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 04:28:22');
INSERT INTO `sys_log` VALUES (181, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 04:29:39');
INSERT INTO `sys_log` VALUES (182, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:30:15');
INSERT INTO `sys_log` VALUES (183, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:31:30');
INSERT INTO `sys_log` VALUES (184, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:37:34');
INSERT INTO `sys_log` VALUES (185, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:41:32');
INSERT INTO `sys_log` VALUES (186, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:51:46');
INSERT INTO `sys_log` VALUES (187, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:51:46');
INSERT INTO `sys_log` VALUES (188, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:52:22');
INSERT INTO `sys_log` VALUES (189, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:52:22');
INSERT INTO `sys_log` VALUES (190, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:52:33');
INSERT INTO `sys_log` VALUES (191, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:52:33');
INSERT INTO `sys_log` VALUES (192, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:52:50');
INSERT INTO `sys_log` VALUES (193, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:52:50');
INSERT INTO `sys_log` VALUES (194, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:52:57');
INSERT INTO `sys_log` VALUES (195, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 04:52:57');
INSERT INTO `sys_log` VALUES (196, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 04:53:07');
INSERT INTO `sys_log` VALUES (197, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:01:23');
INSERT INTO `sys_log` VALUES (198, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:09:19');
INSERT INTO `sys_log` VALUES (199, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:12:33');
INSERT INTO `sys_log` VALUES (200, 9, '88888888@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 05:12:33');
INSERT INTO `sys_log` VALUES (201, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:12:38');
INSERT INTO `sys_log` VALUES (202, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:15:31');
INSERT INTO `sys_log` VALUES (203, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:23:24');
INSERT INTO `sys_log` VALUES (204, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:23:31');
INSERT INTO `sys_log` VALUES (205, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:24:35');
INSERT INTO `sys_log` VALUES (206, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:26:05');
INSERT INTO `sys_log` VALUES (207, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:26:06');
INSERT INTO `sys_log` VALUES (208, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:26:06');
INSERT INTO `sys_log` VALUES (209, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:28:01');
INSERT INTO `sys_log` VALUES (210, 16, 'hexhedonist@outlook.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 05:28:01');
INSERT INTO `sys_log` VALUES (211, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:28:08');
INSERT INTO `sys_log` VALUES (212, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:29:04');
INSERT INTO `sys_log` VALUES (213, 16, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 05:31:47');
INSERT INTO `sys_log` VALUES (214, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 05:33:21');
INSERT INTO `sys_log` VALUES (215, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 05:33:48');
INSERT INTO `sys_log` VALUES (216, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 05:47:34');
INSERT INTO `sys_log` VALUES (217, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 05:50:01');
INSERT INTO `sys_log` VALUES (218, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 05:53:25');
INSERT INTO `sys_log` VALUES (219, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 05:55:34');
INSERT INTO `sys_log` VALUES (220, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 05:55:35');
INSERT INTO `sys_log` VALUES (221, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 05:57:28');
INSERT INTO `sys_log` VALUES (222, 9, '88888888@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2022-05-21 05:57:41');
INSERT INTO `sys_log` VALUES (223, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 06:35:00');
INSERT INTO `sys_log` VALUES (224, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 06:38:47');
INSERT INTO `sys_log` VALUES (225, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 06:48:15');
INSERT INTO `sys_log` VALUES (226, NULL, NULL, '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 06:48:15');
INSERT INTO `sys_log` VALUES (227, NULL, NULL, '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 06:48:21');
INSERT INTO `sys_log` VALUES (228, 8, '664650322@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 07:56:43');
INSERT INTO `sys_log` VALUES (229, 16, 'hexhedonist@outlook.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 07:57:06');
INSERT INTO `sys_log` VALUES (230, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 07:59:24');
INSERT INTO `sys_log` VALUES (231, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 08:10:12');
INSERT INTO `sys_log` VALUES (232, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 08:11:52');
INSERT INTO `sys_log` VALUES (233, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 08:13:23');
INSERT INTO `sys_log` VALUES (234, 16, 'hexhedonist@outlook.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 08:14:51');
INSERT INTO `sys_log` VALUES (235, 16, 'hexhedonist@outlook.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2022-05-21 08:14:52');
INSERT INTO `sys_log` VALUES (236, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TTopicController.save', '2022-05-21 08:53:04');
INSERT INTO `sys_log` VALUES (237, 16, 'hexhedonist@outlook.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 08:58:15');
INSERT INTO `sys_log` VALUES (238, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 09:17:45');
INSERT INTO `sys_log` VALUES (239, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 09:18:21');
INSERT INTO `sys_log` VALUES (240, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 09:19:03');
INSERT INTO `sys_log` VALUES (241, 2, 'admin', '保存', 'cn.zdxh.invitation.controller.TInvitationController.save', '2022-05-21 09:19:21');
INSERT INTO `sys_log` VALUES (242, 16, 'hexhedonist@outlook.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 09:19:29');
INSERT INTO `sys_log` VALUES (243, 16, 'hexhedonist@outlook.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2022-05-21 09:19:30');
INSERT INTO `sys_log` VALUES (244, 16, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 09:20:58');
INSERT INTO `sys_log` VALUES (245, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 09:25:47');
INSERT INTO `sys_log` VALUES (246, 9, '88888888@qq.com', '异常', 'cn.zdxh.user.controller.TUserController.login===cn.zdxh.commons.utils.WebRuntimeException: 用户名或密码错误！', '2022-05-21 09:25:47');
INSERT INTO `sys_log` VALUES (247, 9, '88888888@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 09:25:50');
INSERT INTO `sys_log` VALUES (248, 15, '1027796553@qq.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 09:26:02');
INSERT INTO `sys_log` VALUES (249, 15, '1027796553@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-21 09:26:25');
INSERT INTO `sys_log` VALUES (250, NULL, NULL, '注册', 'cn.zdxh.user.controller.TUserController.register', '2022-05-21 10:18:58');
INSERT INTO `sys_log` VALUES (251, 17, 'hexhedonist@outlook.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-21 10:19:22');
INSERT INTO `sys_log` VALUES (252, 17, 'hexhedonist@outlook.com', '保存', 'cn.zdxh.user.controller.TUserController.updateUserInfoFront', '2022-05-21 10:19:51');
INSERT INTO `sys_log` VALUES (253, 15, '1027796553@qq.com', '登录', 'cn.zdxh.user.controller.TUserController.login', '2022-05-25 19:41:25');
INSERT INTO `sys_log` VALUES (254, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2022-05-25 19:53:18');
INSERT INTO `sys_log` VALUES (255, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-25 19:53:19');
INSERT INTO `sys_log` VALUES (256, 9, '88888888@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2022-05-25 19:53:21');
INSERT INTO `sys_log` VALUES (257, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-25 19:53:23');
INSERT INTO `sys_log` VALUES (258, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2022-05-25 19:53:46');
INSERT INTO `sys_log` VALUES (259, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-25 19:53:48');
INSERT INTO `sys_log` VALUES (260, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-25 19:53:48');
INSERT INTO `sys_log` VALUES (261, 9, '88888888@qq.com', '点赞', 'cn.zdxh.invitation.controller.TInvitationController.addLaud', '2022-05-25 19:53:49');
INSERT INTO `sys_log` VALUES (262, 9, '88888888@qq.com', '收藏', 'cn.zdxh.invitation.controller.TInvitationController.addCollect', '2022-05-25 19:53:49');
INSERT INTO `sys_log` VALUES (263, 9, '88888888@qq.com', '保存', 'cn.zdxh.invitation.controller.TCommentController.save', '2022-05-25 19:54:07');

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '唯一主键',
  `com_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '评论内容',
  `com_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '评论图片（可多张）',
  `com_laud` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '点赞数',
  `inv_id` int NOT NULL COMMENT '帖子id',
  `user_id` int NOT NULL COMMENT '用户id',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '评论表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
INSERT INTO `t_comment` VALUES (1, '巧了，今天我也去了华阳湖', 'http://www.gogle.com', '0', 1, 1, '2019-12-17 16:01:15');
INSERT INTO `t_comment` VALUES (2, '我觉得这显示屏不好看！', 'http://qiniu.ningxiaojian.top/004ebc1f-6a38-4b32-b6a2-4673310aecdf.jpg', '0', 3, 1, '2019-12-17 16:01:18');
INSERT INTO `t_comment` VALUES (4, '不错不错', 'http://qiniu.ningxiaojian.top/004ebc1f-6a38-4b32-b6a2-4673310aecdf.jpg', '0', 12, 1, '2020-02-02 15:08:04');
INSERT INTO `t_comment` VALUES (5, '很好笑', 'http://qiniu.ningxiaojian.top/004ebc1f-6a38-4b32-b6a2-4673310aecdf.jpg', '0', 12, 1, '2020-02-02 15:08:31');
INSERT INTO `t_comment` VALUES (7, '哇！偶像！', NULL, '0', 11, 9, '2020-02-02 18:33:59');
INSERT INTO `t_comment` VALUES (8, '哎哟，不错哦！', NULL, '0', 6, 8, '2020-02-02 20:30:12');
INSERT INTO `t_comment` VALUES (9, '哈哈哈，这小孩车技真的?啊', NULL, '0', 6, 8, '2020-02-02 20:36:11');
INSERT INTO `t_comment` VALUES (10, '想学习学习', NULL, '0', 6, 8, '2020-02-02 20:45:09');
INSERT INTO `t_comment` VALUES (11, '这手柄在哪里买的？ ', NULL, '0', 2, 8, '2020-02-02 20:48:44');
INSERT INTO `t_comment` VALUES (12, '哎哟不错哦', NULL, '0', 23, 8, '2020-04-13 10:51:26');
INSERT INTO `t_comment` VALUES (13, '哎哟不错哦哦哦', NULL, '0', 23, 8, '2020-04-13 11:03:52');
INSERT INTO `t_comment` VALUES (14, '哎哟不错哦哦哦', NULL, '0', 23, 8, '2020-04-13 11:04:03');
INSERT INTO `t_comment` VALUES (15, '哎哟不错哦哦哦', NULL, '0', 23, 8, '2020-04-13 11:03:54');
INSERT INTO `t_comment` VALUES (16, '哎哟不错哦哦哦', NULL, '0', 23, 8, '2020-04-13 11:04:01');
INSERT INTO `t_comment` VALUES (17, '噢噢噢', NULL, '0', 22, 8, '2020-04-13 11:05:54');
INSERT INTO `t_comment` VALUES (18, '测试测试', NULL, '0', 23, 8, '2020-04-13 11:16:17');
INSERT INTO `t_comment` VALUES (19, '测试测试', NULL, '0', 23, 8, '2020-04-13 11:27:19');
INSERT INTO `t_comment` VALUES (20, '答辩', NULL, '0', 23, 8, '2020-04-13 11:31:17');
INSERT INTO `t_comment` VALUES (21, '答辩测试', NULL, '0', 23, 8, '2020-04-13 11:34:02');
INSERT INTO `t_comment` VALUES (22, '非常厉害！！', NULL, '0', 45, 9, '2022-05-25 19:53:18');
INSERT INTO `t_comment` VALUES (23, '帅 很帅！！', NULL, '0', 47, 9, '2022-05-25 19:53:46');
INSERT INTO `t_comment` VALUES (24, '点赞！！', NULL, '0', 45, 9, '2022-05-25 19:54:07');

-- ----------------------------
-- Table structure for t_focus_fans
-- ----------------------------
DROP TABLE IF EXISTS `t_focus_fans`;
CREATE TABLE `t_focus_fans`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `user_id` int NOT NULL COMMENT '用户id',
  `friend_id` int NOT NULL COMMENT '好友id',
  `type` int NOT NULL DEFAULT 1 COMMENT '类型。1关注2粉丝',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '关注和粉丝表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_focus_fans
-- ----------------------------
INSERT INTO `t_focus_fans` VALUES (3, 8, 2, 1, '2020-03-31 23:12:58');
INSERT INTO `t_focus_fans` VALUES (4, 2, 8, 2, '2020-03-31 23:12:58');
INSERT INTO `t_focus_fans` VALUES (7, 8, 9, 2, '2020-04-01 12:28:11');
INSERT INTO `t_focus_fans` VALUES (8, 9, 8, 1, '2020-04-01 12:28:14');
INSERT INTO `t_focus_fans` VALUES (39, 8, 1, 1, '2022-05-18 10:14:59');
INSERT INTO `t_focus_fans` VALUES (40, 1, 8, 2, '2022-05-18 10:14:59');
INSERT INTO `t_focus_fans` VALUES (47, 8, 9, 1, '2022-05-18 10:18:18');
INSERT INTO `t_focus_fans` VALUES (48, 9, 8, 2, '2022-05-18 10:18:18');
INSERT INTO `t_focus_fans` VALUES (63, 15, 15, 1, '2022-05-19 18:23:06');
INSERT INTO `t_focus_fans` VALUES (64, 15, 15, 2, '2022-05-19 18:23:06');
INSERT INTO `t_focus_fans` VALUES (67, 15, 9, 1, '2022-05-19 19:16:11');
INSERT INTO `t_focus_fans` VALUES (68, 9, 15, 2, '2022-05-19 19:16:11');
INSERT INTO `t_focus_fans` VALUES (69, 16, 2, 1, '2022-05-21 04:25:41');
INSERT INTO `t_focus_fans` VALUES (70, 2, 16, 2, '2022-05-21 04:25:41');
INSERT INTO `t_focus_fans` VALUES (71, 15, 16, 1, '2022-05-21 09:26:21');
INSERT INTO `t_focus_fans` VALUES (72, 16, 15, 2, '2022-05-21 09:26:21');

-- ----------------------------
-- Table structure for t_invitation
-- ----------------------------
DROP TABLE IF EXISTS `t_invitation`;
CREATE TABLE `t_invitation`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '唯一id',
  `inv_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '帖子内容',
  `inv_type` int NOT NULL DEFAULT 1 COMMENT '帖子类型。图文1视频2',
  `inv_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '帖子图片（可多张）',
  `inv_video` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '帖子视频',
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID',
  `top_id` int NOT NULL COMMENT '话题id',
  `inv_laud` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '点赞数',
  `inv_share` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '分享数',
  `inv_collect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '收藏数',
  `inv_status` tinyint NULL DEFAULT 0 COMMENT '审核状态（0未审核/1审核通过/2审核未通过）',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 48 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '帖子表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_invitation
-- ----------------------------
INSERT INTO `t_invitation` VALUES (1, '今天的华阳湖真美！', 1, '', '', 1, 3, '0', '0', '0', 1, '2019-12-17 15:52:15');
INSERT INTO `t_invitation` VALUES (2, '强悍的游戏手柄！！！', 1, '', '', 2, 1, '0', '0', '0', 1, '2019-12-17 15:53:15');
INSERT INTO `t_invitation` VALUES (3, '完美的显示屏！！！', 1, '', '', 8, 1, '0', '0', '0', 1, '2019-12-17 15:44:46');
INSERT INTO `t_invitation` VALUES (6, '无解的漂移！', 2, NULL, NULL, 9, 4, '0', '1', '0', 1, '2019-12-23 11:02:24');
INSERT INTO `t_invitation` VALUES (11, '这是个帅哥吧', 1, NULL, NULL, 2, 1, '0', '1', '0', 2, '2020-01-19 21:42:23');
INSERT INTO `t_invitation` VALUES (12, '下午刚发现个搞笑视频，分享给你们哈哈', 2, NULL, NULL, 1, 1, '0', '1', '0', 1, '2020-01-19 21:47:56');
INSERT INTO `t_invitation` VALUES (22, '测试视频1', 2, NULL, NULL, 2, 2, '0', '0', '0', 1, '2020-04-08 19:56:01');
INSERT INTO `t_invitation` VALUES (23, '测试图片', 1, NULL, NULL, 2, 1, '0', '0', '0', 1, '2020-04-08 20:15:40');
INSERT INTO `t_invitation` VALUES (24, '测试视频2', 2, NULL, NULL, 2, 3, '0', '0', '0', 1, '2020-04-08 20:19:12');
INSERT INTO `t_invitation` VALUES (33, '测试定时器', 1, NULL, '', 8, 1, '0', '0', '0', 1, '2020-04-08 22:49:11');
INSERT INTO `t_invitation` VALUES (37, '测试测试', 1, NULL, '', 8, 7, '0', '0', '0', 1, '2020-04-13 11:35:08');
INSERT INTO `t_invitation` VALUES (38, '测试', 1, NULL, '', 15, 1, '0', '0', '0', 1, '2022-05-18 09:23:37');
INSERT INTO `t_invitation` VALUES (39, 'wqseqe', 1, '', '', 15, 1, '0', '0', '0', 1, '2022-05-18 09:42:45');
INSERT INTO `t_invitation` VALUES (40, '哈哈哈', 1, 'http://rc0oennsy.hn-bkt.clouddn.com/4a40bc5b-26af-4462-8733-af2a3d009608.jpg', NULL, 2, 1, '0', '0', '0', 1, '2022-05-20 22:53:57');
INSERT INTO `t_invitation` VALUES (41, '哈哈哈', 2, '', '', 9, 1, '0', '0', '0', 1, '2022-05-21 05:47:34');
INSERT INTO `t_invitation` VALUES (42, '哈哈哈', 2, '', '', 9, 1, '0', '0', '0', 1, '2022-05-21 05:50:01');
INSERT INTO `t_invitation` VALUES (43, '嘻嘻', 2, '', 'http://rc0oennsy.hn-bkt.clouddn.com/109399bc-2a92-44a0-8a4d-3235a6a509be.mp4', 9, 1, '0', '0', '0', 1, '2022-05-21 05:53:25');
INSERT INTO `t_invitation` VALUES (44, '', 2, '', '', 9, 1, '0', '0', '0', 2, '2022-05-21 06:35:00');
INSERT INTO `t_invitation` VALUES (45, '新iPhone', 1, 'http://rc0oennsy.hn-bkt.clouddn.com/a9468f99-bc31-4df6-92bc-5e3693de5841.jpg', '', 16, 1, '0', '0', '0', 1, '2022-05-21 07:59:24');
INSERT INTO `t_invitation` VALUES (47, '帅吗？', 1, 'http://rc0oennsy.hn-bkt.clouddn.com/6c3bc9f2-5cd9-48cb-a9cf-d57cd04f9fa3.png', '', 16, 9, '0', '0', '0', 1, '2022-05-21 09:17:45');
INSERT INTO `t_invitation` VALUES (48, 'WIndows宣传片', 2, '', 'http://rc0oennsy.hn-bkt.clouddn.com/234f00ff-24a6-4610-a0ae-9dec960f45d0.mp4', 16, 1, '0', '0', '0', 1, '2022-05-21 09:19:03');

-- ----------------------------
-- Table structure for t_topic
-- ----------------------------
DROP TABLE IF EXISTS `t_topic`;
CREATE TABLE `t_topic`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `top_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '话题名称',
  `top_note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '话题备注',
  `top_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '话题图标',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '话题表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_topic
-- ----------------------------
INSERT INTO `t_topic` VALUES (1, '科技区', '科技专属地带', 'http://rc0oennsy.hn-bkt.clouddn.com/06fadc27-967f-4d43-a60a-2ef5110bc90e.jpg', '2019-12-16 17:22:38');
INSERT INTO `t_topic` VALUES (2, '声控区', '声控福利专区', 'http://rc0oennsy.hn-bkt.clouddn.com/fab88e7e-c6bb-413e-9e26-d70cc77c62b5.jpg', '2019-12-16 17:24:53');
INSERT INTO `t_topic` VALUES (3, '风景区', '美丽的风景', '', '2019-12-17 15:47:05');
INSERT INTO `t_topic` VALUES (4, '高分影区', '高分电影推荐', '', '2019-12-18 15:50:01');
INSERT INTO `t_topic` VALUES (5, '搞笑视频', '一堆搞笑视频', '', '2019-12-18 15:50:29');
INSERT INTO `t_topic` VALUES (7, '搞笑图片', '一堆搞笑图片', NULL, '2019-12-18 19:11:07');
INSERT INTO `t_topic` VALUES (8, '程序猿园区', '程序员日常分享', '', '2019-12-18 19:13:33');
INSERT INTO `t_topic` VALUES (9, '游戏日常', '吐槽游戏日常', '', '2019-12-19 17:51:16');
INSERT INTO `t_topic` VALUES (11, '追星狂热区', '妹纸最多的话题', NULL, '2019-12-19 17:51:47');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '登录名（手机号）',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码（加密）',
  `nickname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '昵称',
  `type` int NOT NULL DEFAULT 2 COMMENT '类型。1管理员2普通用户',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '用户头像',
  `sex` int NULL DEFAULT 1 COMMENT '性别。1男2女',
  `birthday` date NULL DEFAULT NULL COMMENT '生日',
  `signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '个性签名',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `modify_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, '664650333@qq.com', 'e10adc3949ba59abbe56e057f20f883e', '', 2, '', 2, '2019-11-12', '个人签名', '2019-11-12 00:57:00', '2019-11-12 00:57:00');
INSERT INTO `t_user` VALUES (2, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '好玩官方账号', 1, '', 1, '2019-12-19', '（密码是123456）', '2019-12-19 15:32:09', '2019-12-19 15:32:14');
INSERT INTO `t_user` VALUES (8, '664650322@qq.com', 'e10adc3949ba59abbe56e057f20f883e', 'Justin', 2, 'http://rc0oennsy.hn-bkt.clouddn.com/b5905abe-ff54-4033-921c-0b31d12d745a.png', 1, '2020-03-18', '有个性噢。', '2020-01-17 22:15:05', '2022-05-18 10:27:27');
INSERT INTO `t_user` VALUES (9, '88888888@qq.com', 'e10adc3949ba59abbe56e057f20f883e', '周杰伦', 2, 'http://rc0oennsy.hn-bkt.clouddn.com/b86f8f83-8a8a-4647-a351-f4d1422d9e1d.webp', 1, '2020-04-09', '哎呦不错哦', '2020-04-09 21:30:56', '2022-05-19 22:02:53');
INSERT INTO `t_user` VALUES (15, '1@qq.com', 'bc9aebf1a9eb8f57e231cdf8148d5ca9', 'Hx', 2, 'http://rc0oennsy.hn-bkt.clouddn.com/f6f52849-d900-41b3-8416-61f33014164c.png', 1, '2022-05-18', '', '2022-05-18 09:41:28', '2022-05-21 09:26:02');
INSERT INTO `t_user` VALUES (16, '2.com', 'e10adc3949ba59abbe56e057f20f883e', '林俊杰JJ', 2, 'http://rc0oennsy.hn-bkt.clouddn.com/4696f089-e7d0-4a19-a239-5b82005eba25.jpg', 1, '2022-05-21', '那些你很冒险的梦', '2022-05-21 04:18:48', '2022-05-21 09:20:58');
INSERT INTO `t_user` VALUES (17, 'hexhedonist@outlook.com', 'e10adc3949ba59abbe56e057f20f883e', 'Hex', 2, 'http://rc0oennsy.hn-bkt.clouddn.com/64f22dac-dbd1-4d04-b57c-a2944324786a.png', 1, '2022-05-21', 'ces', '2022-05-21 10:18:58', '2022-05-21 10:19:51');

-- ----------------------------
-- Table structure for tb_chat_record
-- ----------------------------
DROP TABLE IF EXISTS `tb_chat_record`;
CREATE TABLE `tb_chat_record`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'id',
  `userid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户id',
  `friendid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '好友id',
  `has_read` int NULL DEFAULT NULL COMMENT '是否已读',
  `createtime` datetime NULL DEFAULT NULL COMMENT '聊天时间',
  `has_delete` int NULL DEFAULT NULL COMMENT '是否删除',
  `message` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_chat_record
-- ----------------------------
INSERT INTO `tb_chat_record` VALUES ('1527822053317541888', '9', '16', 1, '2022-05-21 09:22:18', 0, '嘿 我是杰伦');
INSERT INTO `tb_chat_record` VALUES ('1527822085160697856', '9', '16', 1, '2022-05-21 09:22:25', 0, '\\emo47 ');
INSERT INTO `tb_chat_record` VALUES ('1527822149757173760', '9', '16', 1, '2022-05-21 09:22:41', 0, '[img=http://rc0oennsy.hn-bkt.clouddn.com/0f49cc58-d990-4a83-ba1e-1ad8b7a4c917.jpg]');
INSERT INTO `tb_chat_record` VALUES ('1527822171957624832', '16', '9', 1, '2022-05-21 09:22:46', 0, '[img=http://rc0oennsy.hn-bkt.clouddn.com/3261ef3a-9f09-4afd-aa4f-680f57fc9bec.jpg]');
INSERT INTO `tb_chat_record` VALUES ('1527822290975195136', '16', '9', 1, '2022-05-21 09:23:14', 0, '[video=http://rc0oennsy.hn-bkt.clouddn.com/c63a874f-2c18-420c-9413-c257a0812b14.mp4]');
INSERT INTO `tb_chat_record` VALUES ('1527822688867844096', '9', '16', 1, '2022-05-21 09:24:49', 0, '[img=http://rc0oennsy.hn-bkt.clouddn.com/83f43ff6-1426-4a81-8ccf-aaacebe3b684.jpg]');
INSERT INTO `tb_chat_record` VALUES ('1527822737978949632', '9', '16', 1, '2022-05-21 09:25:01', 0, '[audio=http://rc0oennsy.hn-bkt.clouddn.com/c5d5b047-dcf2-4f70-9a0b-a6f98cc43f8a.mp3]');
INSERT INTO `tb_chat_record` VALUES ('1527823160991285248', '15', '16', 1, '2022-05-21 09:26:42', 0, 'hello');
INSERT INTO `tb_chat_record` VALUES ('1529427483982561280', '9', '8', 0, '2022-05-25 19:41:42', 0, 'Hello!');
INSERT INTO `tb_chat_record` VALUES ('1529428131797008384', '9', '15', 0, '2022-05-25 19:44:17', 0, '来聊天啊');

SET FOREIGN_KEY_CHECKS = 1;
