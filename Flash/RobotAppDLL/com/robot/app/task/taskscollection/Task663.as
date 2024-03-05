package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_663;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task663
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var gamePanel:MovieClip;
       
      
      public function Task663()
      {
         super();
      }
      
      public static function initTask() : void
      {
         NpcDialog.show(NPC.SHIPER,["经过打探，我们得知这颗名叫格雷斯星球被崇拜黑暗的邪灵组织控制着，凡是反抗它们的精灵都将被无情的消灭！"],["船长！我现在去格雷星继续深入调查！","我要休息一会！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["嗯，你要小心行事，注意邪灵组织的动态，别打草惊蛇！"],["我知道了！"],[function():void
            {
               TasksManager.accept(663,null);
               taskStep = 0;
               gotoStep1();
            }]);
         }]);
      }
      
      public static function gotoStep1() : void
      {
         taskStep = 0;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_663_1"),function():void
         {
            MapManager.changeMap(451);
         });
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_663.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_663.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  OgreController.isShow = false;
                  ToolBarController.showOrHideAllUser(false);
                  _map.conLevel["Task663MC"]["pointMC"].visible = false;
                  _map.conLevel["Task663MC"].visible = true;
                  _map.conLevel["Task663MC"].buttonMode = true;
                  _map.conLevel["Task663MC"].addEventListener(MouseEvent.CLICK,task663MCHandler);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["Task663MC"]);
         }
      }
      
      private static function task663MCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["Task663MC"].removeEventListener(MouseEvent.CLICK,task663MCHandler);
         _map.conLevel["Task663MC"]["tipMC"].visible = false;
         NpcDialog.show(NPC.FITJIDU,["嘘….赛尔，小声点！布莱克刚刚来过。它抓了奥德长老，直接往格雷山地方向去了！"],["它干嘛要抓奥德？"],[function():void
         {
            NpcDialog.show(NPC.FITJIDU,["奥德是我们这的长老，学识渊博，他知道很多格雷斯星的故事传说。布莱克抓他要干什么，我也不清楚！"],["格雷高地在那边？"],[function():void
            {
               NpcDialog.show(NPC.FITJIDU,["你直接往上走就可以找到入口，对于布莱克的暴行，我们真是无能为力啊！请你一定要救回奥德。"],["放心吧！我会救回奥德的！"],[function():void
               {
                  _map.conLevel["Task663MC"]["pointMC"].visible = true;
               }]);
            }]);
         }]);
      }
      
      public static function initTaskForMap452(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_663.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_663.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(!a[0])
               {
                  taskStep = 0;
                  TasksManager.complete(TaskController_663.TASK_ID,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        gotoStep2();
                     }
                  });
               }
               else if(Boolean(a[0]) && !a[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["monsterMC"]);
            _map.conLevel["doorMC"].gotoAndStop(3);
         }
      }
      
      private static function gotoStep2() : void
      {
         var mc:MovieClip = null;
         mc = _map.conLevel["monsterMC"];
         mc.addFrameScript(150,function():void
         {
            mc.stop();
            NpcDialog.show(NPC.SEER,["布莱克！快放了奥德，年纪轻轻的欺负一个老头，你害不害臊啊！"],["又是你！"],[function():void
            {
               NpcDialog.show(NPC.BULAIKE,["看来，这老家伙是没办法打开石门了，要不让那个破铁皮试试？还可以用他试探石门是否会发生危险！嗯！就这样。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.BULAIKE,["赛尔，你必须把石门打开！要是做不到的话，就别怪我对这个老头不客气，看到那口枯井了吗？啊！哈哈哈！"],["布莱克！你太邪恶了！"],[function():void
                  {
                     _map.conLevel["pointMC"].visible = true;
                     _map.conLevel["doorMC"].buttonMode = true;
                     _map.conLevel["doorMC"].addEventListener(MouseEvent.CLICK,doorHandler);
                  }]);
               });
            }]);
            mc.addFrameScript(150,null);
         });
         mc.play();
      }
      
      private static function doorHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["pointMC"].visible = false;
         if(gamePanel == null)
         {
            gamePanel = _map.topLevel["gamePanel"];
            gamePanel.init();
            gamePanel.addEventListener("success",successHandler);
            NpcDialog.show(NPC.SEER,["咦！这个石门好奇怪啊！看样子开启机关一定就在附近！"],["点击石门试试！"],[function():void
            {
               gamePanel.visible = true;
            }]);
         }
         else
         {
            gamePanel.visible = true;
         }
      }
      
      private static function destroyGamePanel() : void
      {
         if(gamePanel)
         {
            gamePanel.visible = false;
            gamePanel.destroy();
            gamePanel.removeEventListener("success",successHandler);
            gamePanel = null;
         }
      }
      
      private static function successHandler(param1:Event) : void
      {
         var evt:Event = param1;
         _map.conLevel["doorMC"].buttonMode = false;
         _map.conLevel["doorMC"].removeEventListener(MouseEvent.CLICK,doorHandler);
         destroyGamePanel();
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_663_2"),function():void
         {
            _map.conLevel["monsterMC"].visible = false;
            _map.conLevel["doorMC"].play();
            NpcDialog.show(NPC.SEER,["布莱克！你这个混蛋！"],["我必须赶紧救奥德长老！"],[function():void
            {
               TasksManager.complete(TaskController_663.TASK_ID,1,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("第二步完成");
                     taskStep = 2;
                     gotoStep3();
                  }
               });
            }]);
         });
      }
      
      private static function gotoStep3() : void
      {
         DisplayUtil.removeForParent(_map.conLevel["monsterMC"]);
         _map.conLevel["doorMC"].gotoAndStop(3);
         _map.conLevel["lineMC"].gotoAndStop(2);
         _map.conLevel["lineMC"]["lineHit"].buttonMode = true;
         _map.conLevel["lineMC"]["lineHit"].addEventListener(MouseEvent.CLICK,lineHandler);
      }
      
      private static function lineHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["lineMC"]["lineHit"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["lineMC"],3,"mc3",function():void
         {
            NpcDialog.show(NPC.AODE_ZHANGLAO,["太危险了！幸好你在这里，要不然我真不知道该怎么办！"],["你没事就好？哎！那块闪光的石片是什么啊！你紧张得都大叫了！"],[function():void
            {
               NpcDialog.show(NPC.AODE_ZHANGLAO,["相传千年前格雷星空中掉落了3块星际碎片，因为蕴含着被视为不祥之兆的暗黑能量，所以被先祖封藏了起来！"],["啊？"],[function():void
               {
                  NpcDialog.show(NPC.AODE_ZHANGLAO,["本来我以为这只是传说，没想到竟然让布莱克给找到了，它挟持我就是为了解密石门。"],["要是其他的星际碎片也落入它们手中，那可就糟了！"],[function():void
                  {
                     NpcDialog.show(NPC.AODE_ZHANGLAO,["哎！格雷斯星的那些伙伴们对邪灵组织已经无能为力了！"],["放心，我不会让那些家伙肆意妄为的！我保证！"],[function():void
                     {
                        NpcDialog.show(NPC.AODE_ZHANGLAO,["恩，不过我相信洞穴内一定有不可告人的秘密，我有种不祥的预感..."],["布莱克...."],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["看来事情比想象的要严重啊！布莱克这家伙究竟想干嘛！山洞中究竟会有什么秘密呢？"],["布莱克我发誓，一定要找到你的！"],[function():void
                           {
                              TasksManager.complete(TaskController_663.TASK_ID,2,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DebugTrace.show("任务完成");
                                    taskStep = 3;
                                    ToolBarController.showOrHideAllUser(true);
                                    OgreController.isShow = true;
                                 }
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id != 4)
         {
            if(MapManager.currentMap.id == 451)
            {
               if(_map.conLevel["Task663MC"])
               {
                  _map.conLevel["Task663MC"].removeEventListener(MouseEvent.CLICK,task663MCHandler);
               }
               OgreController.isShow = true;
               ToolBarController.showOrHideAllUser(true);
            }
            else if(MapManager.currentMap.id == 452)
            {
               destroyGamePanel();
               _map.conLevel["doorMC"].removeEventListener(MouseEvent.CLICK,doorHandler);
               _map.conLevel["lineMC"]["lineHit"].removeEventListener(MouseEvent.CLICK,lineHandler);
               OgreController.isShow = true;
               ToolBarController.showOrHideAllUser(true);
            }
         }
         _map = null;
      }
   }
}
