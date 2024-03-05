package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_570;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.MouseController;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.ui.Mouse;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task570
   {
      
      private static var _map:BaseMapProcess;
      
      private static var findItemMc:MovieClip;
      
      private static var katuAniMc:MovieClip;
      
      private static var arrawMc:MovieClip;
      
      private static var katuMc:MovieClip;
      
      private static var katuHatMc:MovieClip;
      
      private static var enterMc:SimpleButton;
      
      private static var redFlowerMc:MovieClip;
      
      private static var greenFlowerMc:MovieClip;
      
      private static var bigFlowerMc:MovieClip;
      
      private static var floorMc:MovieClip;
      
      private static var cmtMc1:MovieClip;
      
      private static var cmtMc2:MovieClip;
      
      private static var cmtMc3:MovieClip;
      
      private static var shipMc:MovieClip;
      
      private static var kaTuMc:MovieClip;
      
      private static var seaBallMc:MovieClip;
      
      private static var getItemAniMc:MovieClip;
      
      private static var mouseImgMc:MovieClip;
      
      private static var redBallMc:MovieClip;
      
      private static var blueBallMc:MovieClip;
      
      private static var yellowBallMc:MovieClip;
      
      private static var kakuNianMc:MovieClip;
      
      private static var countBall:uint;
      
      private static var isStarted0:Boolean;
      
      private static var isStarted1:Boolean;
      
      private static var isStarted2:Boolean;
      
      public static var panel0:AppModel;
       
      
      public function Task570()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_0"),function():void
         {
            NpcDialog.show(NPC.IRIS,["说到纽斯纽斯就出现……真拿他没办法！哦对了，你是不是现在去赫尔卡星调查一下卡兔的事情？"],["事不宜迟（向着赫然卡星出发）"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_1"),function():void
               {
                  MapManager.changeMap(32);
               });
            }]);
         });
      }
      
      public static function initTask_32(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         findItemMc = _map.conLevel["findItemMc"];
         findItemMc.mouseChildren = false;
         findItemMc.mouseEnabled = false;
         findItemMc.visible = false;
         ToolBarController.showOrHideAllUser(false);
         status = uint(TasksManager.getTaskStatus(570));
         if(status != TasksManager.UN_ACCEPT)
         {
            if(status == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(570,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     startPro0();
                  }
                  else if(Boolean(param1[0]) && !param1[1])
                  {
                     startPro1();
                  }
               });
            }
            else if(status == TasksManager.COMPLETE)
            {
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
            }
         }
      }
      
      private static function startPro0() : void
      {
         findItemMc.visible = true;
         MouseController.removeMouseEvent();
         AnimateManager.playMcAnimate(findItemMc,0,"",function():void
         {
            findItemMc.stop();
            MouseController.addMouseEvent();
            if(MapManager.currentMap.id != 32)
            {
               return;
            }
            NpcDialog.show(NPC.KATU,["通讯器呢……通讯器呢…哎呀！！！通讯器……这可怎么办…"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KATU,["还没来的及谢谢你救了我的命呢！我是来自卡酷星的卡兔……你有看到我的通讯器嘛？"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_2"),function():void
                  {
                     NpcDialog.show(NPC.KATU,["我与卡酷星已经失去联系71小时了……如果再不找到通讯器，我怕可能会是一场星际危机……"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_0_1"),function():void
                        {
                           NpcDialog.show(NPC.KATU,["通讯器一定在那里！就是你们发现我的地方！！！"],null,null,false,function():void
                           {
                              TasksManager.complete(570,0,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(464);
                                 }
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function startPro1() : void
      {
         findItemMc.visible = true;
         findItemMc.gotoAndStop(findItemMc.totalFrames);
      }
      
      public static function initTask_464(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         katuHatMc = _map.conLevel["katuHatMc"];
         katuMc = _map.conLevel["katuMc"];
         katuAniMc = _map.animatorLevel["katuAniMc"];
         arrawMc = _map.animatorLevel["arrawMc"];
         enterMc = _map.conLevel["enterMc"];
         katuAniMc.gotoAndStop(1);
         katuAniMc.visible = false;
         arrawMc.visible = false;
         enterMc.mouseEnabled = false;
         enterMc.addEventListener(MouseEvent.CLICK,onEnterMcHandler);
         status = uint(TasksManager.getTaskStatus(570));
         if(status != TasksManager.UN_ACCEPT)
         {
            if(status == TasksManager.ALR_ACCEPT)
            {
               katuMc.visible = false;
               katuHatMc.visible = false;
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(570,function(param1:Array):void
               {
                  if(param1[0])
                  {
                     if(Boolean(param1[0]) && !param1[1])
                     {
                        startPro1_1();
                     }
                     else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
                     {
                        startPro2();
                     }
                  }
               });
            }
            else if(status == TasksManager.COMPLETE)
            {
               ToolBarController.showOrHideAllUser(true);
               ToolTipManager.add(enterMc,"奇幻世界");
               enterMc.mouseEnabled = true;
               enterMc.addEventListener(MouseEvent.CLICK,onGoToMapHandler);
               katuAniMc.visible = true;
               katuAniMc.gotoAndStop(katuAniMc.totalFrames);
               katuMc.visible = false;
               katuHatMc.visible = false;
            }
         }
      }
      
      private static function onGoToMapHandler(param1:MouseEvent) : void
      {
         MapManager.changeMap(466);
      }
      
      private static function startPro1_1() : void
      {
         NpcDialog.show(NPC.KATU,["我记得这里！就是这里！跟着我来！我知道它在哪里了！"],null,null,false,function():void
         {
            katuAniMc.visible = true;
            MouseController.removeMouseEvent();
            ToolBarController.panel.mouseChildren = false;
            ToolBarController.panel.mouseEnabled = false;
            AnimateManager.playMcAnimate(katuAniMc,0,"",function():void
            {
               ToolBarController.panel.mouseChildren = true;
               ToolBarController.panel.mouseEnabled = true;
               MouseController.addMouseEvent();
               katuAniMc.stop();
               arrawMc.visible = true;
               enterMc.mouseEnabled = true;
               TasksManager.complete(570,1);
            });
         });
      }
      
      private static function startPro2() : void
      {
         katuAniMc.visible = true;
         katuAniMc.gotoAndStop(katuAniMc.totalFrames);
         arrawMc.visible = true;
         enterMc.mouseEnabled = true;
      }
      
      private static function onEnterMcHandler(param1:MouseEvent) : void
      {
         MapManager.changeMap(466);
      }
      
      public static function initTask_466(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         redFlowerMc = _map.conLevel["redFlowerMc"];
         greenFlowerMc = _map.conLevel["greenFlowerMc"];
         bigFlowerMc = _map.conLevel["bigFlowerMc"];
         floorMc = _map.conLevel["floorMc"];
         cmtMc1 = _map.conLevel["cmtMc1"];
         cmtMc2 = _map.conLevel["cmtMc2"];
         cmtMc3 = _map.conLevel["cmtMc3"];
         shipMc = _map.conLevel["shipMc"];
         kaTuMc = _map.conLevel["kaTuMc"];
         seaBallMc = _map.conLevel["seaBallMc"];
         getItemAniMc = _map.conLevel["getItemAniMc"];
         mouseImgMc = _map.conLevel["mouseImgMc"];
         redBallMc = _map.conLevel["redBallMc"];
         blueBallMc = _map.conLevel["blueBallMc"];
         yellowBallMc = _map.conLevel["yellowBallMc"];
         kakuNianMc = _map.conLevel["kakuNianMc"];
         redBallMc.buttonMode = true;
         blueBallMc.buttonMode = true;
         yellowBallMc.buttonMode = true;
         kakuNianMc.mouseChildren = false;
         kakuNianMc.mouseEnabled = false;
         mouseImgMc.visible = false;
         mouseImgMc.mouseChildren = false;
         mouseImgMc.mouseEnabled = false;
         getItemAniMc.visible = false;
         getItemAniMc.mouseChildren = false;
         getItemAniMc.mouseEnabled = false;
         bigFlowerMc.mouseChildren = false;
         bigFlowerMc.mouseEnabled = false;
         redFlowerMc.buttonMode = true;
         greenFlowerMc.buttonMode = true;
         floorMc.buttonMode = true;
         shipMc.buttonMode = true;
         shipMc.buttonMode = true;
         kaTuMc.buttonMode = true;
         seaBallMc.buttonMode = true;
         ToolBarController.showOrHideAllUser(false);
         status = uint(TasksManager.getTaskStatus(570));
         if(status != TasksManager.UN_ACCEPT)
         {
            if(status == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(570,function(param1:Array):void
               {
                  if(param1[0])
                  {
                     if(!(Boolean(param1[0]) && !param1[1]))
                     {
                        if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
                        {
                           startPro2_1();
                        }
                        else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]))
                        {
                           completePro2();
                        }
                     }
                  }
               });
            }
            else if(status == TasksManager.COMPLETE)
            {
               ToolBarController.showOrHideAllUser(true);
               bigFlowerMc.gotoAndStop(4);
               floorMc.gotoAndStop(3);
               seaBallMc.visible = false;
               kaTuMc.visible = false;
            }
         }
      }
      
      private static function startPro2_1() : void
      {
         checkSmallGames();
         NpcDialog.show(NPC.KATU,["这个……那个……我记得明明在这里的呀……"],["（快帮我找找吧！一定就在附近）"],[function():void
         {
         }]);
      }
      
      private static function checkSmallGames() : void
      {
         TasksManager.getProStatusList(570,function(param1:Array):void
         {
            if(!param1[3])
            {
               if(!isStarted0)
               {
                  isStarted0 = true;
                  onGamePro0();
               }
            }
            else
            {
               offGamePro0();
            }
            if(!param1[4])
            {
               if(!isStarted1)
               {
                  isStarted1 = true;
                  onGamePro1();
               }
            }
            else
            {
               offGamePro1();
            }
            if(!param1[5])
            {
               if(!isStarted2)
               {
                  isStarted2 = true;
                  onGamePro2();
               }
            }
            else
            {
               offGamePro2();
            }
            if(Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]))
            {
               completePro2();
            }
            else
            {
               kaTuMc.buttonMode = true;
               kaTuMc.addEventListener(MouseEvent.CLICK,onClickKaTuHandler);
            }
         });
      }
      
      private static function onClickKaTuHandler(param1:MouseEvent) : void
      {
         var talkArr:Array = null;
         var e:MouseEvent = param1;
         talkArr = [];
         TasksManager.getProStatusList(570,function(param1:Array):void
         {
            if(!param1[3])
            {
               talkArr.push(2);
            }
            if(!param1[4])
            {
               talkArr.push(3);
            }
            if(!param1[5])
            {
               talkArr.push(4);
            }
            var _loc2_:int = int(Math.random() * talkArr.length);
            kaTuMc.gotoAndStop(talkArr[_loc2_]);
         });
      }
      
      private static function completePro2() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_3"),function():void
         {
            showCommunicator();
         });
      }
      
      private static function showCommunicator() : void
      {
         if(panel0 == null)
         {
            panel0 = new AppModel(ClientConfig.getTaskModule("TaskPanel0_570"),"正在打开通讯面板");
            panel0.setup();
         }
         panel0.show();
      }
      
      public static function onCommunicateClose() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_570_4"),function():void
         {
            TaskController_570.destroy();
            NpcDialog.show(NPC.SEER,["奇怪的黄帽子……不过还好！这可真是有惊无险！哦对了！爱丽丝还在等我的消息呢！"],["快返回资料室"],[function():void
            {
               TasksManager.complete(570,2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(9);
                  }
               });
            }]);
         });
      }
      
      private static function onClickCmtHandler1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         cmtMc1.visible = false;
         cmtMc1.buttonMode = false;
         cmtMc1.removeEventListener(MouseEvent.CLICK,onClickCmtHandler1);
         TasksManager.complete(570,3,function(param1:Boolean):void
         {
            var b:Boolean = param1;
            if(b)
            {
               getItemAniMc.visible = true;
               AnimateManager.playMcAnimate(getItemAniMc,1,"ani",function():void
               {
                  getItemAniMc.gotoAndStop(1);
                  bigFlowerMc.gotoAndStop(4);
                  getItemAniMc.visible = false;
                  SimpleAlarm.show("你已经获得了一个通讯器部件",true);
                  TaskController_570.showPanel();
                  checkSmallGames();
               });
            }
         });
      }
      
      private static function onClickCmtHandler2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         cmtMc2.visible = false;
         cmtMc2.buttonMode = false;
         cmtMc2.removeEventListener(MouseEvent.CLICK,onClickCmtHandler2);
         TasksManager.complete(570,4,function(param1:Boolean):void
         {
            var b:Boolean = param1;
            if(b)
            {
               getItemAniMc.visible = true;
               AnimateManager.playMcAnimate(getItemAniMc,2,"ani",function():void
               {
                  getItemAniMc.gotoAndStop(1);
                  floorMc.gotoAndStop(3);
                  getItemAniMc.visible = false;
                  SimpleAlarm.show("你已经获得了一个通讯器部件",true);
                  TaskController_570.showPanel();
                  checkSmallGames();
               });
            }
         });
      }
      
      private static function onClickCmtHandler3(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         cmtMc3.visible = false;
         cmtMc3.buttonMode = false;
         cmtMc3.removeEventListener(MouseEvent.CLICK,onClickCmtHandler3);
         TasksManager.complete(570,5,function(param1:Boolean):void
         {
            var b:Boolean = param1;
            if(b)
            {
               seaBallMc.gotoAndStop(1);
               getItemAniMc.visible = true;
               AnimateManager.playMcAnimate(getItemAniMc,3,"ani",function():void
               {
                  getItemAniMc.gotoAndStop(1);
                  floorMc.gotoAndStop(3);
                  getItemAniMc.visible = false;
                  SimpleAlarm.show("你已经获得了一个通讯器部件",true);
                  TaskController_570.showPanel();
                  checkSmallGames();
               });
            }
         });
      }
      
      private static function onGamePro0() : void
      {
         redFlowerMc.addEventListener(MouseEvent.CLICK,onClickRedFlowerHandler);
         greenFlowerMc.addEventListener(MouseEvent.CLICK,onClickGreenFlowerHandler);
      }
      
      private static function offGamePro0() : void
      {
         bigFlowerMc.gotoAndStop(4);
         redFlowerMc.removeEventListener(MouseEvent.CLICK,onClickRedFlowerHandler);
         greenFlowerMc.removeEventListener(MouseEvent.CLICK,onClickGreenFlowerHandler);
      }
      
      private static function onClickRedFlowerHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         redFlowerMc.removeEventListener(MouseEvent.CLICK,onClickRedFlowerHandler);
         redFlowerMc.gotoAndStop(2);
         AnimateManager.playMcAnimate(bigFlowerMc,2,"ani",function():void
         {
         });
      }
      
      private static function onClickGreenFlowerHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         redFlowerMc.removeEventListener(MouseEvent.CLICK,onClickRedFlowerHandler);
         greenFlowerMc.removeEventListener(MouseEvent.CLICK,onClickGreenFlowerHandler);
         greenFlowerMc.gotoAndStop(2);
         AnimateManager.playMcAnimate(bigFlowerMc,3,"ani",function():void
         {
            cmtMc1.buttonMode = true;
            cmtMc1.addEventListener(MouseEvent.CLICK,onClickCmtHandler1);
         });
      }
      
      private static function onGamePro1() : void
      {
         shipMc.addEventListener(MouseEvent.CLICK,onClickShipHandler);
      }
      
      private static function offGamePro1() : void
      {
         floorMc.gotoAndStop(3);
         shipMc.removeEventListener(MouseEvent.CLICK,onClickShipHandler);
      }
      
      private static function onClickShipHandler(param1:MouseEvent) : void
      {
         mouseImgMc.visible = true;
         MainManager.getStage().addEventListener(MouseEvent.MOUSE_MOVE,onMouseUpdateHanlder);
         Mouse.hide();
         floorMc.addEventListener(MouseEvent.CLICK,onClickFloorHandler);
      }
      
      private static function onClickFloorHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Mouse.show();
         MainManager.getStage().removeEventListener(MouseEvent.MOUSE_MOVE,onMouseUpdateHanlder);
         floorMc.removeEventListener(MouseEvent.CLICK,onClickFloorHandler);
         mouseImgMc.visible = false;
         AnimateManager.playMcAnimate(floorMc,2,"ani",function():void
         {
            cmtMc2.buttonMode = true;
            cmtMc2.addEventListener(MouseEvent.CLICK,onClickCmtHandler2);
         });
      }
      
      private static function onMouseUpdateHanlder(param1:MouseEvent) : void
      {
         mouseImgMc.x = param1.stageX;
         mouseImgMc.y = param1.stageY;
      }
      
      private static function onGamePro2() : void
      {
         cmtMc3.mouseEnabled = false;
         cmtMc3.mouseChildren = false;
         seaBallMc.addEventListener(MouseEvent.CLICK,onClickSeaBallHandler);
      }
      
      private static function onClickSeaBallHandler(param1:MouseEvent) : void
      {
         var t:uint = 0;
         var e:MouseEvent = param1;
         seaBallMc.removeEventListener(MouseEvent.CLICK,onClickSeaBallHandler);
         MouseController.removeMouseEvent();
         redBallMc["ani"].gotoAndPlay(2);
         blueBallMc["ani"].gotoAndPlay(2);
         yellowBallMc["ani"].gotoAndPlay(2);
         kakuNianMc["ani"].gotoAndPlay(2);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            cmtMc3.mouseEnabled = true;
            cmtMc3.mouseChildren = true;
            MouseController.addMouseEvent();
            redBallMc.addEventListener(MouseEvent.CLICK,onClickRedBallHandler);
            yellowBallMc.addEventListener(MouseEvent.CLICK,onClickYellowBallHandler);
            blueBallMc.addEventListener(MouseEvent.CLICK,onClickBlueBallHandler);
            NpcDialog.show(NPC.KAKUNIAN,["吵！吵什么吵！看我不狠狠教训你们！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KATU,["什么！你也跟过来了！"],["（卡酷年的弱点是最怕听到鞭炮声，快点击海洋球）"]);
            });
         },1200);
      }
      
      private static function onClickRedBallHandler(param1:MouseEvent) : void
      {
         redBallMc.removeEventListener(MouseEvent.CLICK,onClickRedBallHandler);
         redBallMc.gotoAndStop(3);
         countBallFunc();
      }
      
      private static function onClickYellowBallHandler(param1:MouseEvent) : void
      {
         yellowBallMc.removeEventListener(MouseEvent.CLICK,onClickYellowBallHandler);
         yellowBallMc.gotoAndStop(3);
         countBallFunc();
      }
      
      private static function onClickBlueBallHandler(param1:MouseEvent) : void
      {
         blueBallMc.removeEventListener(MouseEvent.CLICK,onClickBlueBallHandler);
         blueBallMc.gotoAndStop(3);
         countBallFunc();
      }
      
      private static function countBallFunc() : void
      {
         ++countBall;
         if(countBall < 3)
         {
            AnimateManager.playMcAnimate(kakuNianMc,2,"ani",function():void
            {
            });
         }
         else
         {
            AnimateManager.playMcAnimate(kakuNianMc,3,"ani",function():void
            {
               seaBallMc.addEventListener(MouseEvent.CLICK,onClickSeaBallHandler2);
            });
         }
      }
      
      private static function onClickSeaBallHandler2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         seaBallMc.removeEventListener(MouseEvent.CLICK,onClickSeaBallHandler2);
         AnimateManager.playMcAnimate(seaBallMc,0,"",function():void
         {
            seaBallMc.mouseChildren = false;
            seaBallMc.mouseEnabled = false;
            cmtMc3.buttonMode = true;
            cmtMc3.addEventListener(MouseEvent.CLICK,onClickCmtHandler3);
         });
      }
      
      private static function offGamePro2() : void
      {
         seaBallMc.visible = false;
         kakuNianMc.visible = false;
      }
      
      public static function destory() : void
      {
         if(MapManager.currentMap.id != 32)
         {
            if(MapManager.currentMap.id == 464)
            {
               if(enterMc)
               {
                  enterMc.removeEventListener(MouseEvent.CLICK,onEnterMcHandler);
               }
               DisplayUtil.removeForParent(_map.animatorLevel["katuAniMc"]);
            }
            else if(MapManager.currentMap.id == 466)
            {
               countBall = 0;
               isStarted0 = false;
               isStarted1 = false;
               isStarted2 = false;
               redFlowerMc.removeEventListener(MouseEvent.CLICK,onClickRedFlowerHandler);
               greenFlowerMc.removeEventListener(MouseEvent.CLICK,onClickGreenFlowerHandler);
               shipMc.removeEventListener(MouseEvent.CLICK,onClickShipHandler);
               seaBallMc.removeEventListener(MouseEvent.CLICK,onClickSeaBallHandler);
               cmtMc1.addEventListener(MouseEvent.CLICK,onClickCmtHandler1);
               cmtMc2.addEventListener(MouseEvent.CLICK,onClickCmtHandler2);
               cmtMc3.addEventListener(MouseEvent.CLICK,onClickCmtHandler3);
            }
         }
         MouseController.addMouseEvent();
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
