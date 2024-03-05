package com.robot.app.mapProcess.active
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class CatMelonWarsActivity
   {
      
      private static const S1:String = "活动还是前";
      
      private static const S2:String = "活动进心中";
      
      private static const S3:String = "活动结束";
      
      private static var _statu:String;
      
      private static var _canFight:Boolean;
      
      private static var _curStep:int;
      
      private static var _fightStatus:Array;
      
      private static var _mapMv:MovieClip;
      
      private static var _icon:MovieClip;
       
      
      public function CatMelonWarsActivity()
      {
         super();
      }
      
      public static function addMsgAndIcon() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
      }
      
      private static function onGetMsgTime(param1:SocketEvent) : void
      {
         var t:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
         if(getCurrentStatu() != S3)
         {
            LocalMsgController.addLocalMsg("CatVsGuaPanel");
         }
         _icon = UIManager.getMovieClip("vs_icon");
         _icon.x = 570;
         _icon.y = 10.55;
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         LevelManager.toolsLevel.addChild(_icon);
         ToolTipManager.add(_icon,"猫瓜大战");
         if(getCurrentStatu() == S2)
         {
            _icon.visible = true;
         }
         else
         {
            _icon.visible = false;
         }
         if(Boolean(MapManager.currentMap) && getCurrentStatu() == S2)
         {
            t = setTimeout(function():void
            {
               var _loc1_:* = undefined;
               clearTimeout(t);
               if(MapManager.currentMap.id != 790)
               {
                  _loc1_ = new BroadcastInfo();
                  _loc1_.isLocal = true;
                  _loc1_.map = 790;
                  _loc1_.txt = "拉摩斯vs奥莱德，谁才是真正的万圣将军？猫与瓜，新仇旧恨，万圣之夜，角斗场，真假万圣王！立刻前往（点击后进入南瓜角斗场•暗）";
                  BroadcastController.addBroadcast(_loc1_);
               }
            },3000);
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         onIconTimer();
      }
      
      private static function onIconTimer(param1:* = null) : void
      {
         var _loc2_:int = 0;
         if(!_icon)
         {
            return;
         }
         if(getCurrentStatu() == S2)
         {
            _icon.visible = true;
            _loc2_ = getCurrentStep();
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 790)
            {
               return;
            }
            setRundText(_loc2_);
         }
         else
         {
            _icon.visible = false;
         }
      }
      
      private static function setRundText(param1:int) : void
      {
         var _loc2_:* = null;
         if(param1 == 11 || param1 == 10)
         {
            _loc2_ = "第" + (param1 + 1) + "轮开始！本轮可获得猫瓜精元";
         }
         else
         {
            _loc2_ = "第" + (param1 + 1) + "轮开始！还剩" + (10 - param1) + "轮获得猫瓜精元";
         }
         if(_icon)
         {
            _icon["info"]["text"].text = _loc2_;
         }
      }
      
      protected static function onClickIcon(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86051574 + getCurrentStep());
         MapManager.changeMap(790);
      }
      
      public static function initForMap1() : void
      {
         if(guaInMap1)
         {
            guaInMap1.addEventListener(MouseEvent.CLICK,onGua1Click);
         }
      }
      
      public static function destory1() : void
      {
         if(guaInMap1)
         {
            guaInMap1.removeEventListener(MouseEvent.CLICK,onGua1Click);
         }
      }
      
      public static function destory790() : void
      {
         MapNamePanel.show();
         removeEvent();
         _mapMv = null;
         _icon = null;
      }
      
      protected static function onGua1Click(param1:Event) : void
      {
         SocketConnection.send(1022,86051569);
         ModuleManager.showModule(ClientConfig.getAppModule("CatVsGuaPanel"),"正在加载...");
      }
      
      private static function get guaInMap1() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["maogua"];
      }
      
      public static function initForMap790() : void
      {
         SocketConnection.addCmdListener(CommandID.GODVSGOD_CHECK_BOSS,onCheckBoss);
         SocketConnection.send(CommandID.GODVSGOD_CHECK_BOSS);
         cutDownMv.visible = false;
         _canFight = false;
         _mapMv = MapManager.currentMap.controlLevel["catMelonWars"] as MovieClip;
         _statu = getCurrentStatu();
         if(_statu == S2)
         {
            _curStep = getCurrentStep();
            cutDownMv.visible = true;
         }
         if(_statu == S1)
         {
            _curStep = -1;
         }
         DisplayUtil.removeForParent(mapMv);
         if(_statu == S3)
         {
            _mapMv = null;
            DisplayUtil.removeForParent(btnMv);
            MapManager.currentMap.typeLevel["sbwangqiao"].visiable = false;
            MapManager.currentMap.makeMapArray();
         }
         else
         {
            MapManager.currentMap.typeLevel["sbwangqiao"].visiable = true;
            MapManager.currentMap.makeMapArray();
         }
         btnMv.buttonMode = true;
         refreshScene();
      }
      
      private static function addEvent() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,timeCheck);
         catBtn.addEventListener(MouseEvent.CLICK,lamosiClick);
         guaBtn.addEventListener(MouseEvent.CLICK,aolaideClick);
      }
      
      private static function removeEvent() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,timeCheck);
         SocketConnection.removeCmdListener(CommandID.GODVSGOD_CHECK_BOSS,onCheckBoss);
         catBtn.removeEventListener(MouseEvent.CLICK,lamosiClick);
         guaBtn.removeEventListener(MouseEvent.CLICK,aolaideClick);
      }
      
      private static function refreshScene() : void
      {
         if(_statu == S1 && hasFinshPreTask)
         {
            catBtn.gotoAndStop(2);
            guaBtn.gotoAndStop(5);
         }
         guaBtn["tip"].visible = false;
         if(_statu == S2)
         {
            setCurtDown();
            MapNamePanel.hide();
            if(_curStep % 2 == 0)
            {
               catBtn.gotoAndStop(3);
               guaBtn.gotoAndStop(3);
               catBtn["tip"].visible = _canFight;
            }
            else
            {
               catBtn.gotoAndStop(2);
               guaBtn.gotoAndStop(2);
               guaBtn["tip"].visible = _canFight;
            }
         }
      }
      
      private static function timeCheck(param1:Event) : void
      {
         var _loc2_:Date = null;
         if(cutDownMv)
         {
            cutDownMv.visible = false;
         }
         if(getCurrentStatu() != _statu)
         {
            if(_statu != S1)
            {
               if(_statu == S2)
               {
                  playEndTask();
               }
            }
            _statu = getCurrentStatu();
         }
         if(_statu == S2)
         {
            if(cutDownMv)
            {
               cutDownMv.visible = true;
            }
            SocketConnection.send(CommandID.GODVSGOD_CHECK_BOSS);
            _loc2_ = SystemTimerManager.sysDate;
            if(_curStep != getCurrentStep())
            {
               _curStep = getCurrentStep();
               setRundText(_curStep);
               setCurtDown();
               _canFight = true;
               playRoundStartMv();
            }
         }
      }
      
      private static function setCurtDown() : void
      {
         if(_curStep != 11)
         {
            timeTxt.text = nextRoundTime;
         }
         else
         {
            cutDownMv.visible = false;
         }
      }
      
      private static function onCheckBoss(param1:SocketEvent) : void
      {
         _fightStatus = KTool.readDataByBits(param1.data as ByteArray,16);
         if(_fightStatus[_curStep] == 0)
         {
            _canFight = true;
         }
         refreshScene();
         addEvent();
         if(_fightStatus[11] == 1)
         {
            playEndTask();
            removeEvent();
         }
      }
      
      private static function playRoundStartMv() : void
      {
         btnMv.visible = false;
         mapMv.visible = true;
         if(_curStep % 2 == 0)
         {
            if(_curStep == 0)
            {
               playMapMv(5,function():void
               {
               });
            }
            else
            {
               playMapMv(4,function():void
               {
               });
            }
         }
         else
         {
            playMapMv(6,function():void
            {
               playMapMv(7,function():void
               {
               });
            });
         }
         refreshScene();
      }
      
      private static function playPreTask() : void
      {
         var dialogsArray1:Array = null;
         var dialogsArray2:Array = null;
         dialogsArray1 = [[NPC.AOLAIDE_SPECIAL,["上次一战，你借口抵赖。我，0xff0000万圣将军奥莱德0xFFFFFF，大人大量，就再给你一次机会，让你输得心服口服，心甘情愿当我南瓜宝座上的——毯子。"],null],[NPC.LAMOSI,["上次一战，光线太刺眼，影响了我的发挥。这一次，我，0xff0000万圣将军拉摩斯0xFFFFFF，不会再客气了。此战结束，宇宙中不再有奥莱德，只有——南瓜酱!"],null]];
         dialogsArray2 = [[NPC.AOLAIDE_SPECIAL,["现在什么时间？我好像失忆太久，对时间不是很敏感了呢。喂黑猫！现在几点啊？"],null],[NPC.LAMOSI,["我怎么知道现在几点！我只记得0xff000011月3日13:00-14:000xFFFFFF，这里的天空会变得一片漆黑，到时，才是我们决战的最佳时机。!"],["那…那我到时候再来…"]],[NPC.AOLAIDE_SPECIAL,["万圣之夜，新仇旧恨…我，万圣将军奥莱德，会再次打败那只黑猫，让它心服口服。我，会夺回属于我的一切！"],["天这么黑，身为光系精灵，真的没问题吗？"]]];
         playMapMv(2,function():void
         {
            MapManager.currentMap.controlLevel.addChild(mapMv);
            btnMv.visible = false;
            DialogUtil.playDilogs(dialogsArray1,[function():void
            {
               playMapMv(3,function():void
               {
                  MapManager.currentMap.controlLevel.addChild(mapMv);
                  btnMv.visible = false;
                  DialogUtil.playDilogs(dialogsArray2,[function():void
                  {
                     MapManager.currentMap.controlLevel.removeChild(mapMv);
                     btnMv.visible = true;
                     BufferRecordManager.setState(MainManager.actorInfo,442,true);
                     catBtn.gotoAndStop(2);
                     guaBtn.gotoAndStop(5);
                     SocketConnection.send(1022,86051568);
                  }]);
               });
            }]);
         });
      }
      
      private static function playEndTask() : void
      {
         var dialogsArray1:Array = null;
         var dialogsArray2:Array = null;
         var dialogsArray3:Array = null;
         btnMv.visible = false;
         dialogsArray1 = [[NPC.ZUONUO,["现在看看到底谁才是救世主啊？神勇佐洛拯救了救世主大南瓜，那佐洛就是救世主的救世主了。请鼓掌，谢谢~"],["总觉得有些不对劲……"]]];
         dialogsArray2 = [[NPC.SEER,["咦？这…这什么情况？那...到底是谁赢了？~"],null]];
         dialogsArray3 = [[NPC.BIMOLA_NORMOL,["先别盘算你的感恩节大餐了！老大伤得不轻，我们快带它回去，救老大要紧。"],null],[NPC.NASIQI_NORMOL,["那这个南瓜，怎么处理？让我带回去吧，一来给老大报仇，二来…感恩节的南瓜馅饼，材料还没着落呢。"],null]];
         playMapMv(12,function():void
         {
            MapManager.currentMap.controlLevel.addChild(mapMv);
            btnMv.visible = false;
            DialogUtil.playDilogs(dialogsArray1,[function():void
            {
               playMapMv(13,function():void
               {
                  MapManager.currentMap.controlLevel.addChild(mapMv);
                  btnMv.visible = false;
                  DialogUtil.playDilogs(dialogsArray2,[function():void
                  {
                     playMapMv(14,function():void
                     {
                        MapManager.currentMap.controlLevel.addChild(mapMv);
                        btnMv.visible = false;
                        DialogUtil.playDilogs(dialogsArray3,[function():void
                        {
                           playMapMv(15,function():void
                           {
                              DisplayUtil.removeForParent(btnMv);
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("activity_1102"),function():void
                              {
                              });
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function lamosiClick(param1:MouseEvent) : void
      {
         var dialogsArray1:Array = null;
         var f_dialogArr:Array = null;
         var frame:int = 0;
         var e:MouseEvent = param1;
         if(_statu == S1 && hasFinshPreTask)
         {
            dialogsArray1 = [[NPC.LAMOSI,["我怎么知道现在几点！我只记得0xff000011月3日13:00-14:000xFFFFFF，这里的天空会变得一片漆黑，到时，才是我们决战的最佳时机。"],null]];
            DialogUtil.playDilogs(dialogsArray1,null);
         }
         else if(_statu == S2)
         {
            if(!_canFight || _curStep % 2 != 0)
            {
               f_dialogArr = [[NPC.LAMOSI,["黑夜赐予我黑色的毛衣，我再添一件亮色马甲，搭配这深邃的双眸。0xff00005分钟0xFFFFFF，鼓起勇气挑战我，或者去怜悯那可怜的倭瓜。"],["严肃点吧，毕竟是决战啊。"]]];
               frame = _curStep % 2 == 0 ? 9 : 8;
               playMapMv(frame,function():void
               {
                  DialogUtil.playDilogs(f_dialogArr,null);
               });
            }
            if(_curStep % 2 == 0 && _canFight)
            {
               _canFight = false;
               FightManager.fightWithBoss("拉摩斯",_curStep);
            }
         }
         refreshScene();
      }
      
      private static function aolaideClick(param1:*) : void
      {
         var f_dialogArr:Array = null;
         var frame:int = 0;
         var dialogsArray1:Array = null;
         var e:* = param1;
         if(_statu == S2)
         {
            if(!_canFight || _curStep % 2 == 0)
            {
               f_dialogArr = [[NPC.AOLAIDE_SPECIAL,["每过0xff00005分钟0xFFFFFF，我们就离得到一块全新的猫皮毯子更近一步。可惜，圣洁的夜色下，对面那块毯子的色泽竟显得如此庸俗。这暗夜中熠熠生辉的，只有我的光！速！拳！"],["虐猫行为不可以有啊。"]]];
               frame = _curStep % 2 == 0 ? 11 : 10;
               playMapMv(frame,function():void
               {
                  DialogUtil.playDilogs(f_dialogArr,null);
               });
            }
            if(_curStep % 2 != 0 && _canFight)
            {
               _canFight = false;
               FightManager.fightWithBoss("拉摩斯",_curStep);
            }
         }
         else if(_statu == S1)
         {
            if(!hasFinshPreTask)
            {
               playPreTask();
            }
            else
            {
               dialogsArray1 = [[NPC.AOLAIDE_SPECIAL,["万圣之夜，新仇旧恨…我，万圣将军奥莱德，会再次打败那只黑猫，让它心服口服。我，会夺回属于我的一切！"],["天这么黑，身为光系精灵，真的没问题吗？"]]];
               DialogUtil.playDilogs(dialogsArray1,null);
            }
         }
         refreshScene();
      }
      
      private static function get mapMv() : MovieClip
      {
         return _mapMv;
      }
      
      private static function get catBtn() : MovieClip
      {
         return btnMv["mao"];
      }
      
      private static function get guaBtn() : MovieClip
      {
         return btnMv["gua"];
      }
      
      private static function get btnMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["btnMv"] as MovieClip;
      }
      
      private static function get hasFinshPreTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,442);
      }
      
      private static function getCurrentStep() : int
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         return Math.floor(_loc1_.minutes / 5);
      }
      
      private static function getCurrentStatu() : String
      {
         var _loc1_:String = null;
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:Date = new Date(2012,10,3,13,0,0,0);
         var _loc4_:Date = new Date(2012,10,3,14,0,0,0);
         if(_loc2_.time < _loc3_.time)
         {
            _loc1_ = S1;
         }
         else if(_loc2_.time > _loc3_.time && _loc2_.time < _loc4_.time)
         {
            _loc1_ = S2;
         }
         else
         {
            _loc1_ = S3;
         }
         return _loc1_;
      }
      
      private static function get nextRoundTime() : String
      {
         var _loc1_:int = 0;
         var _loc2_:Date = null;
         if(_curStep >= 0 && _curStep < 12)
         {
            _loc2_ = SystemTimerManager.sysDate;
            _loc1_ = (_curStep + 1) * 5 - _loc2_.minutes;
            _loc1_ = _loc1_ < 0 ? 1 : _loc1_;
         }
         return _loc1_ + "";
      }
      
      private static function get cutDownMv() : MovieClip
      {
         return MapManager.currentMap.topLevel["countDown"];
      }
      
      private static function get timeTxt() : TextField
      {
         return cutDownMv["timeText"];
      }
      
      private static function playMapMv(param1:int, param2:Function = null) : void
      {
         var fram:int = param1;
         var fun:Function = param2;
         MapManager.currentMap.controlLevel.addChild(mapMv);
         btnMv.visible = false;
         AnimateManager.playMcAnimate(mapMv,fram,"mc" + fram,function():void
         {
            MapManager.currentMap.controlLevel.removeChild(mapMv);
            btnMv.visible = true;
            if(null != fun)
            {
               fun.call();
            }
         });
      }
   }
}
