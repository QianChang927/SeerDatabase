package com.robot.app2.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LordOfWarController
   {
      
      public static var scoreBeforFight:int;
      
      public static var itemNumBeforeFight:int;
      
      public static const TEAM_NAMES:Array = ["北斗七神将","南斗六魔星"];
      
      private static var _isPlayPreTask:Boolean;
      
      public static var PET_IDS0:Array = [2235,2266,2279,2299,2321,2329,2364];
      
      public static var REGIONS0:Array = [990,1071,1076,1099];
      
      public static var BUY_IDS0:Array = [201473,201475,201490,240222,240330,240357,240442];
      
      public static var PET_IDS1:Array = [2237,2268,2281,2301,2309,2340,2372];
      
      public static var REGIONS1:Array = [991,1072,1077,1100];
      
      public static var BUY_IDS1:Array = [201474,201476,201491,240223,240297,240406,240485];
      
      public static var FULL_MVS:Array = ["shenmoJihuo","shenmo1","shenmo2","shenmo3","shenmo4","shenmo5","shenmo6"];
      
      public static var isWin:Boolean;
      
      public static const NPC_DIALOG_IDS:Object = {
         2237:NPC.ASUYA,
         2235:NPC.LAAOSI,
         2266:NPC.BOBITE,
         2268:NPC.LEINUOXI,
         2279:NPC.NASILI,
         2281:NPC.JIAXIYA,
         2299:NPC.FALIAIDE,
         2301:NPC.PUTISI
      };
      
      private static var petActivieMoneyList:Array = [2321,2329,2340,2364,2372];
      
      private static var buyActivieMoneyList:Array = [240331,240408,240409,240443,240492];
       
      
      public function LordOfWarController()
      {
         super();
      }
      
      public static function joinTeame() : void
      {
         var t:int = 0;
         t = int(setTimeout(function():void
         {
            clearTimeout(t);
            SocketConnection.sendWithCallback(CommandID.LORDOFWAR_GET_SING_UP_INFO,function(param1:SocketEvent):void
            {
               var e0:SocketEvent = param1;
               SocketConnection.sendWithCallback(CommandID.LORDOFWAR_GET_SING_UP_INFO,function(param1:SocketEvent):void
               {
                  var _loc2_:* = (e0.data as ByteArray).readUnsignedInt();
                  var _loc3_:* = (param1.data as ByteArray).readUnsignedInt();
                  if(_loc2_ > _loc3_)
                  {
                  }
               },2);
            },1);
         },3000));
      }
      
      public static function getTryPanelByPid(param1:int) : String
      {
         var _loc2_:Object = {
            "2237":"AsuyaTryPanel",
            "2235":"LaaosiTryPanel",
            "2266":"BobiteTryPanel",
            "2268":"LeinuoxiTryPanel",
            "2279":"NasiliTryPanel",
            "2281":"JiaxiyaTryPanel",
            "2299":"FaliaideTryPanel",
            "2301":"TipusiTryPanel",
            "2309":"SikepienTryPanel",
            "2321":"LuoqiyaTryPanel",
            "2329":"KamiouTryPanel",
            "2340":"FeierteTryPanel",
            "2364":"BeinimiTryPanel",
            "2372":"NiguolasiTryPanel"
         };
         return _loc2_[param1 + ""];
      }
      
      public static function joinTeam() : void
      {
         MainManager.actorInfo.lordOfWarTeamId == 0;
      }
      
      public static function initForMap984() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapListenerManager.add(MapManager.currentMap.controlLevel["goBtn"],onNpcClick);
         initPosition();
         if(_isPlayPreTask)
         {
            return;
         }
         if(!hasFinshPreTask())
         {
            playPreTask();
         }
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         if(MapManager.currentMap.id != 984)
         {
            return;
         }
         info = e.dataObj as FightOverInfo;
         if(info.winnerID != MainManager.actorID)
         {
            if(FightManager.currentBossRegion == REGIONS0[REGIONS0.length - 1])
            {
               AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["beidou"],2,"mv",function():void
               {
                  MapManager.currentMap.controlLevel["beidou"].gotoAndStop(1);
               });
            }
            else if(FightManager.currentBossRegion == REGIONS1[REGIONS1.length - 1])
            {
               AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["nandou"],2,"mv",function():void
               {
                  MapManager.currentMap.controlLevel["nandou"].gotoAndStop(1);
               });
            }
         }
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         if(MainManager.actorInfo.lordOfWarTeamId == 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"),"正在打开...",2235);
            return;
         }
         switch(param1.currentTarget.name)
         {
            case "beidou":
               if(MainManager.actorInfo.lordOfWarTeamId == 1)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"),"正在打开...");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarFightPanel"),"正在打开...",2299);
               }
               break;
            case "nandou":
               if(MainManager.actorInfo.lordOfWarTeamId == 2)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"),"正在打开...");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarFightPanel"),"正在打开...",2301);
               }
               break;
            case "goBtn":
               MapManager.changeLocalMap(10499);
         }
      }
      
      public static function onIconClick(param1:UserInfo) : void
      {
         var npcDid:int = 0;
         var tName:String = null;
         var str:String = null;
         var tName2:String = null;
         var uInfo:UserInfo = param1;
         if(uInfo.userID == MainManager.actorID)
         {
            if(hasFinshPreTask())
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"));
            }
            else
            {
               playPreTask();
            }
         }
         else
         {
            if(MainManager.actorInfo.lordOfWarTeamId == 0)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"));
               return;
            }
            npcDid = MainManager.actorInfo.lordOfWarTeamId == 1 ? int(NPC.LAAOSI) : int(NPC.ASUYA);
            if(uInfo.lordOfWarTeamId == 0)
            {
               NpcDialog.show(npcDid,["北斗七神将和南斗六魔星之间的对决正在进行，是否要进入银河裂隙查看一下？"],["是的！","我还是再准备一下吧。"],[function():void
               {
                  MapManager.changeMap(984);
               }]);
            }
            else if(uInfo.lordOfWarTeamId == MainManager.actorInfo.lordOfWarTeamId)
            {
               tName = uInfo.lordOfWarTeamId == 1 ? "南斗六魔星" : "北斗七神将";
               str = uInfo.nick + "是你的盟友，赶快进入银河裂隙向" + tName + "发起挑战吧！";
               NpcDialog.show(npcDid,[str],["好的！","我还是再准备一下吧。"],[function():void
               {
                  MapManager.changeMap(984);
               }]);
            }
            else
            {
               tName2 = uInfo.lordOfWarTeamId != 1 ? "南斗六魔星" : "北斗七神将";
               NpcDialog.show(npcDid,[uInfo.nick + "是对立方阵营，赶快进入银河裂隙向" + tName2 + "发起挑战吧！"],["好的！","我还是再准备一下吧。"],[function():void
               {
                  MapManager.changeMap(984);
               }]);
            }
         }
      }
      
      public static function initPosition() : void
      {
         if(MainManager.actorInfo.lordOfWarTeamId == 1)
         {
            MainManager.actorModel.x = 195;
            MainManager.actorModel.y = 440;
            MainManager.actorModel.walkAction(new Point(195,440));
         }
         else if(MainManager.actorInfo.lordOfWarTeamId == 2)
         {
            MainManager.actorModel.x = 710;
            MainManager.actorModel.y = 440;
            MainManager.actorModel.walkAction(new Point(710,440));
         }
         else
         {
            MainManager.actorModel.x = 710;
            MainManager.actorModel.y = 440;
            MainManager.actorModel.walkAction(new Point(710,440));
         }
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86070886);
         _isPlayPreTask = true;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("nanbeidou"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addFullMv(ClientConfig.getFullMovie("active_20140321_22"));
            taskQuePro.addChangeMap(984,function():void
            {
               MapManager.currentMap.controlLevel.visible = false;
               MapManager.currentMap.btnLevel.addChild(mapMv);
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addFullMv(ClientConfig.getFullMovie("nanbeidouwenzi"));
            taskQuePro.procesEndFun = function():void
            {
               MapManager.currentMap.controlLevel.visible = true;
               SocketConnection.send(1022,86070354);
               MapObjectControl.hideOrShowAllObjects(true);
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               KTool.showMapAllPlayerAndMonster();
               SocketConnection.send(1022,86070887);
               BufferRecordManager.setMyState(1094,true,function():void
               {
                  SocketConnection.send(CommandID.COMMAND_4548,421,1);
               });
               ModuleManager.showModule(ClientConfig.getAppModule("LordOfWarMainPanel"));
               _isPlayPreTask = false;
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
      
      public static function hasFinshPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(1094);
      }
      
      public static function initNumBeforeFight() : void
      {
         KTool.getMultiValue([3092],function(param1:Array):void
         {
            scoreBeforFight = param1[0];
         });
         ItemManager.upDateCollection(1400416,function():void
         {
            itemNumBeforeFight = ItemManager.getNumByID(1400416);
         });
      }
      
      public static function activieHideSkill(param1:int, param2:String) : void
      {
         var mvName:String = null;
         var targetId:int = 0;
         var pid:int = param1;
         var panelName:String = param2;
         var index:int = getIndexByPid(pid);
         mvName = String(FULL_MVS[index]);
         targetId = getTargetID(pid);
         if(PetXMLInfo.getEvolvesTo(pid) > 0)
         {
            pid = int(PetXMLInfo.getEvolvesTo(pid));
         }
         PetManager.upDate(function():void
         {
            var flag:int = petActivieMoneyList.indexOf(pid);
            if(flag != -1)
            {
               if(getCatchTime(pid))
               {
                  KTool.buyProductByCallback(buyActivieMoneyList[flag],1,function():void
                  {
                     SocketConnection.sendWithCallback(CommandID.JIHUO_BEIDOU,function():void
                     {
                        ModuleManager.hideModule(ClientConfig.getAppModule(panelName));
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(mvName),function():void
                        {
                           Alarm.show("隐藏技能只能在新对战界面中使用！");
                           ModuleManager.showModule(ClientConfig.getAppModule(panelName),"正在打开...",pid);
                        });
                     },getCatchTime(pid));
                  });
               }
               else
               {
                  Alarm.show(PetXMLInfo.getName(pid) + "不在背包中！");
               }
            }
            else if(pid == 2309)
            {
               if(Boolean(getCatchTime(pid)) && Boolean(getCatchTime(targetId)))
               {
                  SocketConnection.sendWithCallback(CommandID.JIHUO_NANDOU,function():void
                  {
                     ModuleManager.hideModule(ClientConfig.getAppModule(panelName));
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(mvName),function():void
                     {
                        Alarm.show("隐藏技能只能在新对战界面中使用！");
                        ModuleManager.showModule(ClientConfig.getAppModule(panelName),"正在打开...",pid);
                     });
                  },getCatchTime(pid));
               }
               else
               {
                  Alarm.show(PetXMLInfo.getName(pid) + "," + PetXMLInfo.getName(getTargetID(pid)) + "必须同时在背包中！");
               }
            }
            else if(Boolean(getCatchTime(pid)) && Boolean(getCatchTime(getTargetID(pid))))
            {
               SocketConnection.send(CommandID.LORDOFWAR_JIHUO);
               SocketConnection.sendWithCallback(CommandID.ACTIVIE_HIDE_SKILL,function():void
               {
                  SocketConnection.send(CommandID.ACTIVIE_HIDE_SKILL,getCatchTime(getTargetID(pid)),SkillXMLInfo.getHideSkillId(targetId));
                  ModuleManager.hideModule(ClientConfig.getAppModule(panelName));
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(mvName),function():void
                  {
                     Alarm.show("隐藏技能只能在新对战界面中使用！");
                     ModuleManager.showModule(ClientConfig.getAppModule(panelName),"正在打开...",pid);
                  });
               },getCatchTime(pid),SkillXMLInfo.getHideSkillId(pid));
            }
            else
            {
               Alarm.show(PetXMLInfo.getName(pid) + "," + PetXMLInfo.getName(getTargetID(pid)) + "必须同时在背包中！");
            }
         });
      }
      
      private static function onBuy(param1:*) : void
      {
         var e:* = param1;
         EventManager.removeEventListener(RobotEvent.GOLD_BUY,onBuy);
         if(ProductAction.productID == 240331)
         {
            ItemManager.upDateCollection(1700919,function():void
            {
               if(!ItemManager.getNumByID(1700919))
               {
               }
            });
         }
      }
      
      private static function getCatchTime(param1:int) : uint
      {
         var _loc4_:PetListInfo = null;
         var _loc2_:Array = PetManager.getBagMap();
         if(PetXMLInfo.getEvolvesTo(param1) > 0)
         {
            param1 = int(PetXMLInfo.getEvolvesTo(param1));
         }
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if((_loc4_ = _loc2_[_loc3_]).id == param1)
            {
               return _loc4_.catchTime;
            }
            _loc3_++;
         }
         return 0;
      }
      
      public static function showTestPanel(param1:int) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(getTryPanelByPid(param1)),"正在打开...",param1);
      }
      
      public static function getTargetID(param1:int) : int
      {
         var _loc2_:Array = LordOfWarController.PET_IDS0;
         var _loc3_:Array = LordOfWarController.PET_IDS1;
         var _loc4_:int = _loc2_.indexOf(param1) == -1 ? _loc3_.indexOf(param1) : _loc2_.indexOf(param1);
         return _loc2_[_loc4_] == param1 ? int(_loc3_[_loc4_]) : int(_loc2_[_loc4_]);
      }
      
      public static function getIndexByPid(param1:int) : int
      {
         var _loc2_:Array = LordOfWarController.PET_IDS0;
         var _loc3_:Array = LordOfWarController.PET_IDS1;
         return _loc2_.indexOf(param1) == -1 ? _loc3_.indexOf(param1) : _loc2_.indexOf(param1);
      }
   }
}
