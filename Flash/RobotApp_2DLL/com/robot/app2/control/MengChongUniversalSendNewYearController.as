package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.Utils;
   
   public class MengChongUniversalSendNewYearController
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      public static const NODE__BUFFER_ID:uint = 1305;
      
      public static var _numArr:Array;
      
      private static var _bossArr:Array = [{
         "bossName":"洛格斯",
         "bossId":6505
      },{
         "bossName":"伊兰特斯",
         "bossId":6506
      }];
       
      
      public function MengChongUniversalSendNewYearController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var i:int;
         var j:int;
         var K:int;
         var l:int;
         var map:BaseMapProcess = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         _map = map;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         _map.conLevel["shortTree"].addEventListener(MouseEvent.CLICK,onShortTreeClick);
         i = 0;
         while(i < 7)
         {
            _map.conLevel["music_" + i].addEventListener(MouseEvent.CLICK,onMusicClick);
            _map.conLevel["music_" + i].buttonMode = true;
            i++;
         }
         j = 0;
         while(j < 4)
         {
            _map.conLevel["completePlayMc_" + j].visible = false;
            _map.conLevel["lanternsMc_" + j].addEventListener(MouseEvent.CLICK,onlanternsMcClick);
            _map.conLevel["lanternsMc_" + j].buttonMode = true;
            j++;
         }
         K = 0;
         while(K < 2)
         {
            _map.conLevel["lanternsMc_" + K].addEventListener(MouseEvent.CLICK,onBoosMcClick);
            _map.conLevel["lanternsMc_" + K].buttonMode = true;
            K++;
         }
         l = 0;
         while(l < 3)
         {
            _map.conLevel["buyBtn_" + l].addEventListener(MouseEvent.CLICK,onBuyBtnClick);
            l++;
         }
         if(!isNodeTaskDone)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_mengChongUniversalSendNewYear"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.conLevel.addChild(taskMc);
               startPreTask();
            });
         }
         else
         {
            update();
         }
      }
      
      private static function onBuyBtnClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onBuySpHandler);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
            "productID":246682 + _loc2_,
            "iconID":1708285 + _loc2_,
            "exchangeID":8257 + _loc2_
         });
      }
      
      private static function onBuySpHandler(param1:*) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onBuySpHandler);
         update();
      }
      
      private static function onBoosMcClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
      }
      
      private static function onlanternsMcClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var evt:MouseEvent = param1;
         index = int(evt.currentTarget.name.split("_")[1]);
         if(_numArr[0] >= 3 && _numArr[1] >= 2 && _numArr[2] >= 2)
         {
            KTool.doExchange(8260,function():void
            {
               _map.conLevel["completePlayMc_" + index].visible = true;
               AnimateManager.playMcAnimate(_map.conLevel as MovieClip,1,"completePlayMc_" + index,function():void
               {
                  _map.conLevel["completePlayMc_" + index].visible = false;
                  update();
               });
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MengChongUniversalSendNewYearAlertPanel"),"正在打开....");
         }
      }
      
      private static function onShortTreeClick(param1:MouseEvent) : void
      {
         var nowTime:Number = NaN;
         var evt:MouseEvent = param1;
         nowTime = Number(SystemTimerManager.time);
         KTool.getMultiValue([12427],function(param1:Array):void
         {
            var va:Array = param1;
            var passedTime:int = nowTime - va[0];
            if(passedTime >= 4)
            {
               CommonUI.setEnabled(_map.conLevel,false,false);
               _map.conLevel["mcBar"].visible = true;
               AnimateManager.playMcAnimate(_map.conLevel as MovieClip,1,"mcBar",function():void
               {
                  KTool.doExchange(8263,function():void
                  {
                     KTool.getPlayerInfo([636],function(param1:Array):void
                     {
                        var arr:Array = param1;
                        if(arr[0] > 0)
                        {
                           _map.conLevel["boosMc_0"].visible = true;
                           AnimateManager.playMcAnimate(_map.conLevel["boosMc_0"],1,"mc1",function():void
                           {
                              _map.conLevel["boosMc_0"].gotoAndStop(2);
                              Dialog1();
                           });
                        }
                        else
                        {
                           update();
                           Alarm2.show("采集成功！");
                        }
                     });
                  });
               });
            }
            else
            {
               Alarm2.show("如果你正在使用浏览器加速！请过" + (4 - passedTime) + "秒再试！");
            }
         });
      }
      
      private static function onMusicClick(param1:MouseEvent) : void
      {
         var nowTime:Number = NaN;
         var evt:MouseEvent = param1;
         nowTime = Number(SystemTimerManager.time);
         KTool.getMultiValue([12428],function(param1:Array):void
         {
            var va:Array = param1;
            var passedTime:int = nowTime - va[0];
            if(passedTime >= 4)
            {
               _map.conLevel["mcBar"].visible = true;
               CommonUI.setEnabled(_map.conLevel,false,false);
               AnimateManager.playMcAnimate(_map.conLevel as MovieClip,1,"mcBar",function():void
               {
                  KTool.doExchange(8264,function():void
                  {
                     KTool.getPlayerInfo([637],function(param1:Array):void
                     {
                        var arr:Array = param1;
                        if(arr[0] > 0)
                        {
                           _map.conLevel["boosMc_1"].visible = true;
                           AnimateManager.playMcAnimate(_map.conLevel["boosMc_1"],1,"mc1",function():void
                           {
                              _map.conLevel["boosMc_1"].gotoAndStop(2);
                              Dialog2();
                           });
                        }
                        else
                        {
                           update();
                           Alarm2.show("采集成功！");
                        }
                     });
                  });
               });
            }
            else
            {
               Alarm2.show("如果你正在使用浏览器加速！请过" + (4 - passedTime) + "秒再试！");
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "goMapBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MengChongUniversalSendNewYearMainPanel"),"正在打开....");
               });
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "exchangeBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("MengChongUniversalSendNewYearMainPanel"),"正在打开....");
               break;
            case "exitBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("MengChongUniversalSendNewYearMainPanel"),"正在打开....");
               });
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
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function update() : void
      {
         var itemIdArr:Array = null;
         CommonUI.setEnabled(_map.conLevel,true,false);
         _map.conLevel["mcBar"].visible = false;
         itemIdArr = [1708285,1708286,1708287];
         ItemManager.updateItems(itemIdArr,function():void
         {
            _numArr = new Array();
            var _loc1_:int = 0;
            while(_loc1_ < 3)
            {
               _numArr[_loc1_] = ItemManager.getNumByID(itemIdArr[_loc1_]);
               _map.conLevel["itemNumTx_" + _loc1_].text = String(_numArr[_loc1_]);
               _loc1_++;
            }
         });
         KTool.getMultiValue([2729],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            _map.conLevel["itemNumTx"].text = String(param1[0]);
         });
         _map.conLevel["boosMc_0"].visible = false;
         _map.conLevel["boosMc_1"].visible = false;
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            BufferRecordManager.setMyState(NODE__BUFFER_ID,true,function():void
            {
               update();
               _map.conLevel.removeChild(taskMc);
            });
         };
         storyPlayer.start();
      }
      
      private static function Dialog1() : void
      {
         NpcDialog.show(NPC.LUOLUOSI,["是谁在我的领地撒野？快把我的东西叫出来！（击败boss或者交出红色纸都有概率获得黄灯油哦）"],["我才不怕你！","交出红色纸*1"],[function():void
         {
            BonusController.addDelay(1783);
            FightManager.fightNoMapBoss("洛格斯",6505,false,true,function():void
            {
               MapManager.changeMapWithCallback(11143,function():void
               {
                  if(FightManager.isWin)
                  {
                     NpcDialog.show(NPC.LUOLUOSI,["要不是我的腿酸了我才不会败给你！我还会回来的！"],["哦。"],[function():void
                     {
                        update();
                        BonusController.addDelay(1783);
                     }],true);
                  }
                  else
                  {
                     NpcDialog.show(NPC.LUOLUOSI,["你拿的东西我收走了！"],["哼！"],[function():void
                     {
                     }],true);
                  }
               });
            });
         },function():void
         {
            BonusController.addDelay(1783);
            StatManager.sendStat2014("0212新年萌宠大联欢最终弹","点击【交出红色纸】","2016运营活动");
            KTool.doExchange(8261,function():void
            {
               NpcDialog.show(NPC.LUOLUOSI,["真是乖孩子！这是给你的奖励"],["谢谢!"],[function():void
               {
                  update();
                  BonusController.showDelayBonus(1783);
               }],true);
            });
         }],true);
      }
      
      private static function Dialog2() : void
      {
         NpcDialog.show(NPC.YISILANTE,["你居然敢偷我食物！快还给我！（击败boss或者交出绿竹枝都有概率获得黄灯油哦）"],["我才不给你！","交出绿竹枝*1"],[function():void
         {
            BonusController.addDelay(1783);
            FightManager.fightNoMapBoss("伊兰特斯",6506,false,true,function():void
            {
               MapManager.changeMapWithCallback(11143,function():void
               {
                  if(FightManager.isWin)
                  {
                     NpcDialog.show(NPC.YISILANTE,["大坏蛋！我要去叫人了！有种你别跑！"],["哦。"],[function():void
                     {
                        update();
                        BonusController.showDelayBonus(1783);
                     }],true);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YISILANTE,["你太弱了！你拿的东西我带走了！"],["哼！"],[function():void
                     {
                     }],true);
                  }
               });
            });
         },function():void
         {
            BonusController.addDelay(1783);
            StatManager.sendStat2014("0212新年萌宠大联欢最终弹","点击【交出绿竹枝】","2016运营活动");
            KTool.doExchange(8262,function():void
            {
               NpcDialog.show(NPC.YISILANTE,["你真是好心肠！这是给你的奖励！"],["谢谢!"],[function():void
               {
                  update();
                  BonusController.showDelayBonus(1783);
               }],true);
            });
         }],true);
      }
      
      private static function get isNodeTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE__BUFFER_ID);
      }
      
      public static function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
      }
   }
}
