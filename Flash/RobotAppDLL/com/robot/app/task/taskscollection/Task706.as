package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task706
   {
      
      private static const TASK_ID:uint = 706;
      
      public static var _yiNeng:MovieClip;
      
      public static var _rope:MovieClip;
      
      public static var _map:BaseMapProcess;
      
      public static var _house:MovieClip;
       
      
      private var _taskState:uint;
      
      public function Task706()
      {
         super();
      }
      
      public static function initTaskForMap669(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _yiNeng = _map.conLevel["task_706_0"];
         _rope = _map.conLevel["task_706_1"];
         _yiNeng.visible = true;
         nRet = uint(TasksManager.getTaskStatus(706));
         if(nRet == TasksManager.COMPLETE)
         {
            _yiNeng.gotoAndStop(7);
            _yiNeng.buttonMode = true;
            _yiNeng.addEventListener(MouseEvent.CLICK,fightWithDadila);
         }
         if(nRet == TasksManager.UN_ACCEPT)
         {
            Step1();
         }
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(706,function(param1:Array):void
            {
               if(!param1[0])
               {
                  Step1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  Step2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  Step3();
               }
               else if(param1[0] && param1[1] && param1[2] && !param1[3] || param1[0] && param1[1] && param1[2] && param1[3] && !param1[4] || param1[0] && param1[1] && param1[2] && param1[3] && param1[4] && !param1[5])
               {
                  _yiNeng.buttonMode = true;
                  _yiNeng.addEventListener(MouseEvent.CLICK,onSecondYinengClick);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && !param1[6])
               {
                  Step7();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && Boolean(param1[6]) && !param1[7])
               {
                  Step8();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && Boolean(param1[6]) && Boolean(param1[7]) && !param1[8])
               {
                  Step9();
               }
            });
         }
      }
      
      public static function initTaskForMap668(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _house = _map.conLevel["task_706_2"];
         var nRet:uint = uint(TasksManager.getTaskStatus(706));
         if(nRet == TasksManager.UN_ACCEPT)
         {
            _house.visible = false;
         }
         if(nRet == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_house);
         }
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            _house.visible = true;
            TasksManager.getProStatusList(706,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  Step4();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  Step5();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  Step6();
               }
            });
         }
      }
      
      public static function Step1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _yiNeng.buttonMode = true;
         _yiNeng.addEventListener(MouseEvent.CLICK,onYinengClick);
      }
      
      private static function onYinengClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _yiNeng.removeEventListener(MouseEvent.CLICK,onYinengClick);
         MapManager.currentMap.spaceLevel.mouseEnabled = false;
         MainManager.actorModel.moveAndAction(new Point(400,200),function():void
         {
            MapManager.currentMap.spaceLevel.mouseEnabled = true;
            if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID);
            }
            NpcDialog.show(NPC.DADILA,["上面哪位好心人能来救救我啊！我已经困在这里很长时间了，喂…有人吗？"],["这家伙怎么会在那里呢？"],[function():void
            {
               NpcDialog.show(NPC.SEER,["哇塞！你怎么会在那里啊！那里太危险了！你快上来吧！"],["这下可怎么办啊！"],[function():void
               {
                  NpcDialog.show(NPC.DADILA,["事情是这样的，我们0xff0000异能一族0xffffff都有自己的特征，原本以为自己已经掌握了所有本领想下去看看有什么新的发现，但是最后…"],["最后怎么了？！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           Step2();
                        }
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function Step2() : void
      {
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_706_1"),function():void
         {
            NpcDialog.show(NPC.DADILA,["结果我就被困在这里了，真是可悲啊！你是第一个从这里经过的，还好你发现了我，否则我都不知道该怎么办了！呜呜呜…"],["别着急小家伙，我会帮助你的！"],[function():void
            {
               NpcDialog.show(NPC.DADILA,["你可以用石桥上的绳索帮助我，把绳子放下来我就能获救啦！"],["好的，我这就去找找"],[function():void
               {
                  _yiNeng.gotoAndStop(2);
                  TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        Step3();
                     }
                  });
               }]);
            }]);
         });
      }
      
      public static function Step3() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _yiNeng.buttonMode = true;
         _yiNeng.addEventListener(MouseEvent.CLICK,onSecondYinengClick);
         _rope.gotoAndStop(2);
         _rope.buttonMode = true;
         _rope.addEventListener(MouseEvent.CLICK,onRopeClick);
      }
      
      private static function onSecondYinengClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
            {
               NpcDialog.show(NPC.DADILA,["你还在那里磨磨蹭蹭干什么啊！快吧绳索放下来啊！笨死了你！"],["可恶，居然说我笨，我可不笨！（点击石桥上的绳索）"]);
            }
            if(a[0] && a[1] && a[2] && !a[3] || a[0] && a[1] && a[2] && a[3] && !a[4] || a[0] && a[1] && a[2] && a[3] && a[4] && !a[5])
            {
               NpcDialog.show(NPC.DADILA,["快去异能部落找0xff0000异能杰尼0xffffff吧！它们那里应该有绳索的，快点回来哦！我快坚持不住了！"],["恩，我这就去！"],[function():void
               {
                  MapManager.changeMap(668);
               }]);
            }
         });
      }
      
      private static function onRopeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ToolBarController.showOrHideAllUser(false);
         MainManager.actorModel.moveAndAction(new Point(400,200),function():void
         {
            _yiNeng.removeEventListener(MouseEvent.CLICK,onSecondYinengClick);
            _rope.removeEventListener(MouseEvent.CLICK,onRopeClick);
            MainManager.actorModel.visible = false;
            NonoManager.nonoGoHome();
            _rope.gotoAndStop(1);
            AnimateManager.playMcAnimate(_yiNeng,3,"task_706_am1",function():void
            {
               NpcDialog.show(NPC.SEER,["哎…你在和我开玩笑吧！这绳索明显不够长啊！怎么可能救你上来？还有其他办法吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DADILA,["啊！不会吧！那你只能去异能部落找0xff0000杰尼0xffffff它们帮忙吧！它们那里应该有，速去速回哈！"],["好吧！那我只能去异能部落走一趟了！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(668);
                        }
                     });
                  }]);
               });
            });
         });
      }
      
      public static function Step4() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["arrow"].visible = true;
         NpcDialog.show(NPC.SEER,["这里应该就是0xff0000异能部落0xffffff了，好像没什么生机啊！我还是先去附近看看吧！"],null,null,false,function():void
         {
            _house.buttonMode = true;
            _house.addEventListener(MouseEvent.CLICK,onHouseClick);
         });
      }
      
      private static function onHouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ToolBarController.showOrHideAllUser(false);
         _house.visible = true;
         MainManager.actorModel.moveAndAction(new Point(550,250),function():void
         {
            _map.conLevel["arrow"].visible = false;
            _house.removeEventListener(MouseEvent.CLICK,onHouseClick);
            AnimateManager.playMcAnimate(_house,1,"task_706_2_am1",function():void
            {
               NpcDialog.show(NPC.JIENI,["咦！你是谁？你来异能部落所为何事呢？"],["你好！我叫赛尔，据说你们这里会有绳索？"],[function():void
               {
                  NpcDialog.show(NPC.JIENI,["你怎么连这个都知道！但是你看看我们这里，由于海盗的入侵我们的家园遭受严重的破坏，绳索对我们来说很紧缺啊！"],["你别误会，我要绳索是因为拯救达迪拉！"],[function():void
                  {
                     NpcDialog.show(NPC.JIENI,["原来是这样，这样吧!正好我需要一些材料，你如果可以的话就去附近帮我去收集10个0xff0000异能晶石0xffffff吧！可以考虑和你交换，怎么样！"],["好啊，好啊！我这就去！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_house,2,"task_706_2_am2",function():void
                        {
                           TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 Step5();
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      private static function onSecondHouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(_house,1,"task_706_2_am1",function():void
         {
            SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
            SocketConnection.send(CommandID.ITEM_LIST,400854,400854,2);
         });
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var stream:ByteArray;
         var typeCount:uint;
         var itemID:uint;
         var itemCount:uint;
         var i:uint;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         stream = event.data as ByteArray;
         typeCount = stream.readUnsignedInt();
         itemID = 0;
         itemCount = 0;
         i = 0;
         while(i < typeCount)
         {
            itemID = stream.readUnsignedInt();
            itemCount = stream.readUnsignedInt();
            i++;
         }
         if(itemCount >= 10)
         {
            _house.removeEventListener(MouseEvent.CLICK,onSecondHouseClick);
            _map.conLevel["ore"].removeEventListener(MouseEvent.CLICK,onGetOre);
            _map.conLevel["ore"].buttonMode = false;
            TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
            {
               if(param1)
               {
                  Step6();
               }
            });
         }
         else
         {
            NpcDialog.show(NPC.JIENI,["异能晶石都收集全了吗？看上去好像不够啊！你还是再去找找吧！否则我是不会和你交换绳索的！"],["哦，我这就去！"],[function():void
            {
               AnimateManager.playMcAnimate(_house,2,"task_706_2_am2");
            }]);
         }
      }
      
      public static function Step5() : void
      {
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["ore"].buttonMode = true;
         ToolTipManager.add(_map.conLevel["ore"],"异能晶石");
         _map.conLevel["ore"].addEventListener(MouseEvent.CLICK,onGetOre);
         ToolBarController.showOrHideAllUser(false);
         _house.visible = true;
         _house.buttonMode = true;
         _house.addEventListener(MouseEvent.CLICK,onSecondHouseClick);
      }
      
      private static function onGetOre(param1:MouseEvent) : void
      {
         SocketConnection.send(CommandID.GATHER_ORE);
         _map.conLevel["arrow"].visible = true;
      }
      
      public static function Step6() : void
      {
         _map.conLevel["arrow"].visible = false;
         ToolBarController.showOrHideAllUser(false);
         _house.visible = true;
         NpcDialog.show(NPC.JIENI,["哇！太好了，感谢你为我做的一切，那我也不会食言，这根绳索就给你了，快去救你的朋友吧！"],["太感谢你了！我这就去！"],[function():void
         {
            AnimateManager.playMcAnimate(_house,2,"task_706_2_am2",function():void
            {
               TasksManager.complete(TASK_ID,5,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     KTool.expendItem(400854,10);
                     MapManager.changeMap(669);
                  }
               });
            });
         }]);
      }
      
      public static function Step7() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _yiNeng.gotoAndStop(2);
         NpcDialog.show(NPC.DADILA,["你终于回来了，我还以为你会一走了之呢！看来你还是挺善良的！"],["那是，我现在就救你上来！"],[function():void
         {
            _rope.gotoAndStop(2);
            _rope.addEventListener(MouseEvent.CLICK,onSecondRopeClick);
            _rope.buttonMode = true;
         }]);
      }
      
      private static function onSecondRopeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(400,200),function():void
         {
            _rope.removeEventListener(MouseEvent.CLICK,onSecondRopeClick);
            MainManager.actorModel.visible = false;
            NonoManager.nonoGoHome();
            _rope.visible = false;
            AnimateManager.playMcAnimate(_yiNeng,4,"task_706_am2",function():void
            {
               NpcDialog.show(NPC.SEER,["太好了，终于完成了！小家伙，我这就来救你！"],["点击绳索"],[function():void
               {
                  _yiNeng.buttonMode = true;
                  _yiNeng.addEventListener(MouseEvent.CLICK,onThirdRopeClick);
               }]);
            });
         });
      }
      
      private static function onThirdRopeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _yiNeng.removeEventListener(MouseEvent.CLICK,onThirdRopeClick);
         _yiNeng.buttonMode = false;
         AnimateManager.playMcAnimate(_yiNeng,5,"task_706_am3",function():void
         {
            TasksManager.complete(TASK_ID,6,function(param1:Boolean):void
            {
               if(param1)
               {
                  Step8();
               }
            });
         });
      }
      
      public static function Step8() : void
      {
         ToolBarController.showOrHideAllUser(false);
         MainManager.actorModel.visible = false;
         NonoManager.nonoGoHome();
         NpcDialog.show(NPC.DADILA,["快来，快来！我好像被卡住了，怎么会这样啊 ！命真苦啊！"],["哈哈！你现在的样子太搞笑啦！"],[function():void
         {
            NpcDialog.show(NPC.DADILA,["太可恶了，居然敢嘲笑我！ "],["你在那里嘀咕什么啊！"],[function():void
            {
               NpcDialog.show(NPC.DADILA,["你别笑呀！快把我拉上来吧！现在被卡在这里难受死了！"],["呵呵！来了，来了啦！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_706_2"),function():void
                  {
                     TasksManager.complete(TASK_ID,7,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           Step9();
                        }
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      public static function Step9() : void
      {
         ToolBarController.showOrHideAllUser(false);
         MainManager.actorModel.visible = false;
         NonoManager.nonoGoHome();
         _yiNeng.gotoAndStop(6);
         ToolBarController.showOrHideAllUser(true);
         NpcDialog.show(NPC.DADILA,["终于上来了，真是感谢你啊！小个子，如果不是你经过这里，我想我还在下面呢！"],["呵呵！不客气啦！这是我应该做的！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["嘿嘿！！哦！对了，我能和你做朋友吗？"],["可以啊！不过…"],[function():void
            {
               NpcDialog.show(NPC.DADILA,["不过据说异能星上有一股神秘的力量，你所拥有的胶囊在这里是起不到任何作用的！"],["什么！有这样的怪事？"],[function():void
               {
                  NpcDialog.show(NPC.DADILA,["是啊 ！不信你可以试试啊！如果你失败了，可以去异能部落找暗黑赛尔了解一下，我想他一定可以告诉你关于这里的秘密！"],["不行，我一定要试试！","暗黑？又是他，看来你说的是真的！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,8,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MainManager.actorModel.visible = true;
                           _yiNeng.gotoAndStop(7);
                           _rope.visible = true;
                           fightWithDadila();
                        }
                     });
                  },function():void
                  {
                     TasksManager.complete(TASK_ID,8,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(668);
                        }
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function fightWithDadila(param1:Event = null) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         FightManager.fightWithBoss("达迪拉",0);
      }
      
      private static function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         NpcDialog.show(NPC.DADILA,["哈哈！你还是抓不到我吧！抓不到，就是抓不到哦！"],["可恶，竟然敢嘲笑我，再试试！","可恶，让我再好好想想！"],[fightWithDadila]);
      }
      
      private static function onCatchPet(param1:PetFightEvent) : void
      {
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClickHandler);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchPet);
         NpcDialog.show(NPC.DADILA,["小个子，你是我遇到的最有实力的对手，我愿意和你成为好朋友，你可要好好照顾我哦！"],["耶，我终于抓到异能精灵咯！"],[function():void
         {
            OgreController.isShow = true;
         }]);
      }
      
      public static function destroy() : void
      {
         if(_yiNeng)
         {
            _yiNeng.removeEventListener(MouseEvent.CLICK,fightWithDadila);
            _yiNeng.removeEventListener(MouseEvent.CLICK,onYinengClick);
            _yiNeng.removeEventListener(MouseEvent.CLICK,onSecondYinengClick);
            _yiNeng.removeEventListener(MouseEvent.CLICK,onThirdRopeClick);
         }
         if(_rope)
         {
            _rope.removeEventListener(MouseEvent.CLICK,onRopeClick);
            _rope.removeEventListener(MouseEvent.CLICK,onSecondRopeClick);
         }
         if(_house)
         {
            _house.removeEventListener(MouseEvent.CLICK,onHouseClick);
            _house.removeEventListener(MouseEvent.CLICK,onSecondHouseClick);
         }
         if(_map)
         {
            if(_map.conLevel["ore"])
            {
               ToolTipManager.remove(_map.conLevel["ore"]);
               _map.conLevel["ore"].removeEventListener(MouseEvent.CLICK,onGetOre);
            }
         }
         _yiNeng = null;
         _rope = null;
         _map = null;
         _house = null;
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
      }
      
      public function initTask_706(param1:BaseMapProcess) : void
      {
      }
      
      private function startTask(param1:Boolean) : void
      {
      }
   }
}
