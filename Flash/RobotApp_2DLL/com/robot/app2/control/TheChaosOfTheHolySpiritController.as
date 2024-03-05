package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class TheChaosOfTheHolySpiritController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static const BUFFERID:uint = 1363;
      
      private static const BUFFERID2:uint = 1344;
      
      private static var campType:int = 0;
      
      private static var _surplusTime:int;
      
      private static var _itemNum:int;
      
      public static var _oldNum:int;
      
      private static var _isFightUser:Boolean = false;
       
      
      public function TheChaosOfTheHolySpiritController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         if(!BufferRecordManager.getMyState(BUFFERID))
         {
            playMc();
         }
         else
         {
            _map = MapManager.currentMap;
            initView();
            update();
         }
      }
      
      private static function playMc() : void
      {
         _map = MapManager.currentMap;
         AnimateManager.playMcAnimate(_map.controlLevel as MovieClip,1,"playMc",function():void
         {
            Dialog1();
         },false,false);
      }
      
      private static function initView() : void
      {
         _map.controlLevel["playMc"].visible = false;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         SocketConnection.addCmdListener(42351,onChangeCampHandler);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         MainManager.actorModel.updateCampHeadIcon();
         SystemTimerManager.addTickFun(onTimer);
      }
      
      private static function onChangeCampHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:BasePeoleModel;
         if(_loc5_ = UserManager.getUserModel(_loc3_))
         {
            _loc5_.updateCampHeadIcon();
         }
         update();
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         switch(event.target.name)
         {
            case "fightBtn":
               if(campType == 0)
               {
                  Alarm2.show("请加入阵营后再来挑战！");
                  return;
               }
               ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritBossPanel"),"正在打开....");
               break;
            case "boxBtn_0":
               ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxAPanel"),"正在打开....");
               break;
            case "boxBtn_1":
               ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxBPanel"),"正在打开....");
               break;
            case "campNpcBtn_0":
               if(campType == 0)
               {
                  KTool.getBitSet([379],function(param1:Array):void
                  {
                     var va1:Array = param1;
                     if(va1[0] > 0)
                     {
                        NpcDialog.show(NPC.SHENGLINGSHOUHU_AOSIKA,["实力不错！你很让我们满意，你确定要加入我们了吗？"],["我已经考虑好了！","我需要再想想。","我想要兑换声望值！"],[function():void
                        {
                           KTool.socketSendCallBack(42350,function():void
                           {
                              MainManager.actorModel.updateCampHeadIcon();
                              TheChaosOfTheHolySpiritController.update();
                              NpcDialog.show(NPC.SHENGLINGSHOUHU_AOSIKA,["欢迎加入圣光联军！努力获得声望值，来兑换丰厚的奖励吧！"],["我要获得声望值。","我要兑换奖励。"],[function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritPrestigePanel"),"正在打开....");
                              },function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxAPanel"),"正在打开....");
                              }]);
                           },[7,1]);
                        },null,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxAPanel"),"正在打开....");
                        }]);
                     }
                     else
                     {
                        NpcDialog.show(NPC.SHENGLINGSHOUHU_AOSIKA,["加入圣光联军，为正义和希望而战斗吧！"],["我要加入圣光联军！","我需要再想想。","我想要兑换声望值！"],[function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampTestAPanel"),"正在打开....");
                        },null,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxAPanel"),"正在打开....");
                        }]);
                     }
                  });
               }
               else if(campType == 1)
               {
                  NpcDialog.show(NPC.SHENGLINGSHOUHU_AOSIKA,["小赛尔，你想做什么"],["如何获得声望值？","我想要兑换声望值！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritPrestigePanel"),"正在打开....");
                  },function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxAPanel"),"正在打开....");
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.SHENGLINGSHOUHU_AOSIKA,["我看你在对面混的也不甚如意，有没有考虑过转投我们阵营？"],["我决定更换阵营！","我需要再想想。","我想要兑换声望值！"],[function():void
                  {
                     KTool.getBitSet([379],function(param1:Array):void
                     {
                        if(param1[0] > 0)
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritChangeCampPanel"),"正在打开....");
                        }
                        else
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampTestAPanel"),"正在打开....");
                        }
                     });
                  },null,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxAPanel"),"正在打开....");
                  }]);
               }
               break;
            case "campNpcBtn_1":
               if(campType == 0)
               {
                  KTool.getBitSet([380],function(param1:Array):void
                  {
                     var va1:Array = param1;
                     if(va1[0] > 0)
                     {
                        NpcDialog.show(NPC.HUNDUNAILAN,["实力不错！你很让我们满意，你确定要加入我们了吗？"],["我已经考虑好了！","我需要再想想。","我想要兑换声望值！"],[function():void
                        {
                           KTool.socketSendCallBack(42350,function():void
                           {
                              MainManager.actorModel.updateCampHeadIcon();
                              TheChaosOfTheHolySpiritController.update();
                              NpcDialog.show(NPC.HUNDUNAILAN,["欢迎加入混沌联军！努力获得声望值，来兑换丰厚的奖励吧！"],["我要获得声望值。","我要兑换奖励。"],[function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritPrestigePanel"),"正在打开....");
                              },function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxBPanel"),"正在打开....");
                              }]);
                           },[7,2]);
                        },null,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxBPanel"),"正在打开....");
                        }]);
                     }
                     else
                     {
                        NpcDialog.show(NPC.HUNDUNAILAN,["加入混沌联军，你将与我们共享支配宇宙的力量！"],["我要加入混沌联军！","我需要再想想。","我想要兑换声望值！"],[function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampTestBPanel"),"正在打开....");
                        },null,function():void
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxBPanel"),"正在打开....");
                        }]);
                     }
                  });
               }
               else if(campType == 2)
               {
                  NpcDialog.show(NPC.HUNDUNAILAN,["小赛尔，你想做什么"],["如何获得声望值？","我想要兑换声望值！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritPrestigePanel"),"正在打开....");
                  },function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxBPanel"),"正在打开....");
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.HUNDUNAILAN,["我看你在对面混的也不甚如意，有没有考虑过转投我们阵营？"],["我决定更换阵营！","我需要再想想。","我想要兑换声望值！"],[function():void
                  {
                     KTool.getBitSet([380],function(param1:Array):void
                     {
                        if(param1[0] > 0)
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritChangeCampPanel"),"正在打开....");
                        }
                        else
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampTestBPanel"),"正在打开....");
                        }
                     });
                  },null,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("TheChaosOfTheHolySpiritCampBoxBPanel"),"正在打开....");
                  }]);
               }
               break;
            case "box":
               ModuleManager.showModule(ClientConfig.getAppModule("ThemescenePreviewPanel"),"正在打开....");
         }
      }
      
      private static function Dialog1() : void
      {
         NpcDialog.show(NPC.ZHENLUOLUOSI,["哇，这里就是决斗神坛了吗，好美啊！"],[""],[function():void
         {
            NpcDialog.show(NPC.DAIDAI,["听说谱尼与索伦森即将展开大战，这可是磨练自己实力的好机会！"],[""],[function():void
            {
               NpcDialog.show(NPC.HANI,["那……我们究竟应该帮助哪一边呢？"],[""],[function():void
               {
                  NpcDialog.show(NPC.LONGLINISI,["先仔细了解一下情况再说吧！"],[""],[function():void
                  {
                     BufferRecordManager.setMyState(BUFFERID,true,function():void
                     {
                        initView();
                        update();
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function onFightOver(param1:*) : void
      {
         var e:* = param1;
         if(PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER)
         {
            if(_isFightUser)
            {
               KTool.getMultiValue([101309],function(param1:Array):void
               {
                  if(param1[0] > _oldNum)
                  {
                     Alarm2.show("恭喜你获得" + (param1[0] - _oldNum) + "点阵营声望！");
                  }
                  _oldNum = param1[0];
               });
               _isFightUser = false;
            }
         }
      }
      
      public static function update() : void
      {
         var i:int;
         var date:Date;
         if(_map == null || _map && _map.controlLevel == null)
         {
            return;
         }
         i = 0;
         while(i < 2)
         {
            _map.controlLevel["mc_" + i].gotoAndStop(int(Math.random() * 4 + 1));
            i++;
         }
         KTool.getMultiValue([101308],function(param1:Array):void
         {
            campType = param1[0];
            var _loc2_:int = 0;
            while(_loc2_ < 2)
            {
               _map.controlLevel["arrow_" + _loc2_].visible = campType > 0 ? false : true;
               _loc2_++;
            }
         });
         date = SystemTimerManager.sysDate;
         KTool.getMultiValue([101309],function(param1:Array):void
         {
            _itemNum = param1[0];
         });
      }
      
      private static function onTimer() : void
      {
      }
      
      private static function alarm() : void
      {
      }
      
      public static function set0ldNum() : void
      {
         _isFightUser = true;
         KTool.getMultiValue([101309],function(param1:Array):void
         {
            _oldNum = param1[0];
         });
      }
      
      public static function destroy() : void
      {
         MainManager.actorModel.hideCampHeadIcon();
         SystemTimerManager.removeTickFun(onTimer);
         if(!MainManager.isFighting)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         }
         SocketConnection.removeCmdListener(34343,onChangeCampHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
   }
}
