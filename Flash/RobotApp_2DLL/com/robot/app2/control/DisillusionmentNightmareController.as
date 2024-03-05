package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.Utils;
   
   public class DisillusionmentNightmareController
   {
      
      private static var _map:MapModel;
      
      private static var _curNum:int;
      
      private static var _rewardArr:Array = [1,2,3,5,8,13];
      
      private static var _curOgre:int;
      
      private static var _requireNum:Array = [1,2,3,5,8,13];
      
      private static var ogres:Array = [];
      
      private static var _petIdArr:Array = [1384,1385,1947];
       
      
      public function DisillusionmentNightmareController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         initView();
         update();
         if(Boolean(FightManager.isWin) && Boolean(MainManager.isFighting))
         {
            KTool.getMultiValue([16984],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] == 3)
               {
                  NpcDialog.show(3645,["是谁？！"],["..."],[function():void
                  {
                     NpcDialog.show(3645,["立刻停手，否则你会后悔的！"],["..."],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",1);
                     }],false,null,true);
                  }],false,null,true);
               }
               else if(va[0] == 8)
               {
                  NpcDialog.show(3645,["这是我最后一次警告！再不住手，你就永远留在这里吧！"],["..."],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",1);
                  }],false,null,true);
               }
               else if(va[0] == 12)
               {
                  NpcDialog.show(3645,["够了！不知好歹的家伙！迎接我的怒火吧！"],["..."],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",2);
                  }],false,null,true);
               }
               else if(va[0] == 13)
               {
                  NpcDialog.show(3645,["可恶！陨星议会绝不会放过你的！绝不！"],["..."],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",3);
                  }],false,null,true);
               }
            });
         }
      }
      
      private static function initView() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
      }
      
      private static function onFightOver(param1:*) : void
      {
         var e:* = param1;
         if(FightManager.isWin)
         {
            KTool.getMultiValue([16984],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] == 8)
               {
                  NpcDialog.show(3645,["是谁？！"],["..."],[function():void
                  {
                     NpcDialog.show(3645,["立刻停手，否则你会后悔的！"],["..."],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",1);
                     }],false,null,true);
                  }],false,null,true);
               }
               else if(va[0] == 12)
               {
                  NpcDialog.show(3645,["够了！不知好歹的家伙！迎接我的怒火吧！"],["..."],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",2);
                  }],false,null,true);
               }
               else if(va[0] == 13)
               {
                  NpcDialog.show(3645,["可恶！陨星议会绝不会放过你的！绝不！"],["..."],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareAlertPanel"),"正在打开....",3);
                  }],false,null,true);
               }
            });
         }
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var index:int = int(event.target.name.split("_")[1]);
         switch(event.target.name)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("DisillusionmentNightmareMainPanel"),"正在打开....");
               });
               break;
            case "npcBtn":
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               FightManager.fightNoMapBoss("噬梦之灵",14329,false,true,function():void
               {
               });
               break;
            case "getBtn_" + index:
               if(_curNum >= _requireNum[index])
               {
                  KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                  {
                     update();
                  },[23,index + 1]);
               }
               else
               {
                  Alarm2.show("累计击破梦魇数量不足！");
               }
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([16983,16984],function(param1:Array):void
         {
            var i:int;
            var j:int = 0;
            var va:Array = param1;
            _curNum = va[1];
            _map.controlLevel["npcBtn"].visible = false;
            _map.controlLevel["mc"].visible = false;
            if(BitUtils.getBit(va[0],6) == 0)
            {
               addBoss(0,false);
               _map.controlLevel["tipsMc"].visible = false;
               NpcDialog.show(NPC.SEER,["我已到达目标星球，收到请回复。"],["..."],[function():void
               {
                  NpcDialog.show(3743,["收到。你周围情况如何？"],["..."],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["如果不是你给我附加了特殊视力，我肯定觉得这里一片平和。现在这里看起来很不妙，梦魇的力量已经深深影响了这里。"],["..."],[function():void
                     {
                        NpcDialog.show(3743,["可恶的噬梦之灵！从梦境中侵蚀精灵们，实在是防不胜防。不过这也是我们这次行动的目标，接下来就看你的了！"],["一定完成任务！"],[function():void
                        {
                           NpcDialog.show(3743,["你的动静一定会被噬梦之灵发现，届时可能引来强大的敌人。请务必小心，一切以保证自身安全为主！"],["放心，“破梦行动”，开始！"],[function():void
                           {
                              KTool.socketSendCallBack(43302,function(param1:SocketEvent):void
                              {
                                 update();
                              },[23,7]);
                           }],false,null,true);
                        }],false,null,true);
                     }],false,null,false);
                  }],false,null,true);
               }],false,null,false);
            }
            else
            {
               j = 0;
               while(j < 6)
               {
                  if(_curNum < _rewardArr[j])
                  {
                     _map.controlLevel["tipsMc"].numTx.text = String(_rewardArr[j] - _curNum);
                     _map.controlLevel["tipsMc"].mc.gotoAndStop(j + 1);
                     break;
                  }
                  j++;
               }
               _map.controlLevel["tipsMc"].visible = true;
               if(_curNum < 3)
               {
                  removeBoss();
                  addBoss(0);
                  _curOgre = 0;
               }
               else if(_curNum < 8)
               {
                  removeBoss();
                  addBoss(1);
                  _curOgre = 1;
               }
               else if(_curNum < 12)
               {
                  removeBoss();
                  addBoss(2);
                  _curOgre = 2;
               }
               else
               {
                  _map.controlLevel["npcBtn"].visible = true;
                  _map.controlLevel["mc"].visible = true;
                  if(_curNum == 13)
                  {
                     _map.controlLevel["tipsMc"].visible = false;
                  }
               }
            }
            _map.controlLevel["numTx"].text = String(va[1]);
            _map.controlLevel["jinduMc"].gotoAndStop(va[1] + 1);
            i = 0;
            while(i < 6)
            {
               if(BitUtils.getBit(va[0],i) > 0)
               {
                  CommonUI.setEnabled(_map.controlLevel["getBtn_" + i],false,true);
                  _map.controlLevel["flagMc_" + i].visible = true;
               }
               else
               {
                  _map.controlLevel["flagMc_" + i].visible = false;
               }
               i++;
            }
         });
      }
      
      public static function addBoss(param1:int, param2:Boolean = true) : void
      {
         var _loc6_:OgreModel = null;
         removeBoss();
         ogres = [];
         var _loc3_:Array = [new Point(114,430),new Point(225,365),new Point(370,273),new Point(282,378),new Point(635,440),new Point(630,265)];
         var _loc4_:int = int(Math.random() * 3);
         var _loc5_:int = 0;
         while(_loc5_ < 3)
         {
            _loc6_ = new OgreModel(_loc5_);
            ogres.push(_loc6_);
            if(param2)
            {
               _loc6_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
            }
            _loc6_.show(_petIdArr[param1],_loc3_[_loc4_ + _loc5_]);
            _loc5_++;
         }
      }
      
      private static function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres.length)
            {
               _loc2_ = ogres[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres.splice(0);
         }
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         FightManager.fightWithBoss("",_curOgre);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         removeBoss();
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
      }
   }
}
