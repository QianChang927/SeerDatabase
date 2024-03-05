package com.robot.app.task.taskscollection
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task741
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 741;
      
      private static var _fireList:Array = [];
      
      private static var _handList:Array = [];
      
      private static var _fireFrames:Array;
      
      private static var _isFight:Boolean;
       
      
      public function Task741()
      {
         super();
      }
      
      public static function initTaskFor672(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task_741_1"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               TasksManager.accept(TASK_ID,startTask);
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor672);
               break;
            case TasksManager.COMPLETE:
               ToolBarController.showOrHideAllUser(true);
         }
      }
      
      public static function initTaskFor676(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["fire0"].visible = false;
         _map.conLevel["fire1"].visible = false;
         _map.conLevel["fire2"].visible = false;
         _map.conLevel["pet0"].visible = false;
         _map.conLevel["pet1"].visible = false;
         _map.conLevel["pet2"].visible = false;
         _map.conLevel["hand0"].visible = false;
         _map.conLevel["hand1"].visible = false;
         _map.conLevel["hand2"].visible = false;
         _map.conLevel["mier"].visible = false;
         _map.conLevel["task741_1"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor676);
               break;
            case TasksManager.COMPLETE:
               taskComplete();
         }
      }
      
      private static function checkStepFor672(param1:Array) : void
      {
         if(!param1[0])
         {
            startTask();
         }
         else
         {
            _map.conLevel["task_741_1"].visible = false;
            _map.conLevel["guide_mc"].visible = true;
         }
      }
      
      private static function checkStepFor676(param1:Array) : void
      {
         if(param1[0])
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               startStep0();
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               startStep1();
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               startStep2();
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               startStep3();
            }
         }
      }
      
      public static function startTask(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         MainManager.actorModel.visible = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task_741_1"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task_741_1"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["事情真的比我想象的严重许多，异能星上的精灵伙伴已经渐渐开始不安了！看来只能靠自己了！邪恶异能王，我一定会找到你！"],["追踪邪恶异能王的下落！"],[function():void
            {
               NpcDialog.show(NPC.AISITE,["这样下去可不行，一定要想办法解决这场灾难！为了异能星，也为了0xff0000守护一族0xffffff，我们一定要齐心协力，出发吧！"],["不好，它们一定是想去找邪恶异能王！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["等等，你们不能去，我亲眼目睹过0xff0000邪恶异能王0xffffff的实力，相信就算是大家一起联手，也绝对不是他的对手！"],["难道我们就这样袖手旁观吗？"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["(⊙v⊙)嗯..这样吧！让我先去0xff0000守护部落0xffffff勘查一下情况，然后我们再做决定吧！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["task_741_1"],2,"mc2",function():void
                        {
                           NpcDialog.show(NPC.SEER,["哇！异…异能军团！我还是第一次知道有这样的组织呢！看来你们早有准备啊！"],["那你们的计划是什么呢？"],[function():void
                           {
                              NpcDialog.show(NPC.AISITE,["邪恶异能王一定是去了守护部落，我们一定要快点到达那里，否则守护一族就危险了！"],["好吧！那我们就一起去吧！"],[function():void
                              {
                                 NpcDialog.show(NPC.DADILA,["异能军队Standby！！我们和小铁皮先去0xff0000守护部落0xffffff勘查一下！等我的命令吧！"],["守护一族坚持住，我们来了！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_map.conLevel["task_741_1"],3,"mc3",function():void
                                    {
                                       MainManager.actorModel.visible = true;
                                       _map.conLevel["task_741_1"].gotoAndStop(4);
                                       TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                       {
                                          _map.conLevel["guide_mc"].visible = true;
                                       });
                                    });
                                 }]);
                              }]);
                           }]);
                        });
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function startStep0() : void
      {
         _map.conLevel["fire0"].visible = true;
         _map.conLevel["fire1"].visible = true;
         _map.conLevel["fire2"].visible = true;
         _map.conLevel["pet0"].visible = true;
         _map.conLevel["pet1"].visible = true;
         _map.conLevel["pet2"].visible = true;
         _map.conLevel["hand0"].visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_741_1"),function():void
         {
            NpcDialog.show(NPC.SEER,["怎么会这样！！这里真的是守护部落吗? 看上去简直就是地狱！！难道我们迟来一步了？ "],["果然…还是晚了！"],[function():void
            {
               NpcDialog.show(NPC.AISITE,["可恶，守护一族不会全都灭绝了吧！如果这是真的，那么异能星将永无宁日了！邪恶异能王将会统治整个异能星！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["你们先别想这么多啦！先将这些大火给扑灭再说啦！说不定会找到幸存者呢！对吧！我们一起来！"],["好吧！希望到最后等待我们的不是绝望！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,1,startStep1);
                  }]);
               });
            }]);
         });
      }
      
      private static function startStep1(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         _map.conLevel["pet0"].visible = true;
         _map.conLevel["pet1"].visible = true;
         _map.conLevel["pet2"].visible = true;
         _map.conLevel["fire0"].visible = true;
         _map.conLevel["fire1"].visible = true;
         _map.conLevel["fire2"].visible = true;
         _map.conLevel["pet0"].gotoAndStop(2);
         _map.conLevel["pet1"].gotoAndStop(2);
         _map.conLevel["pet2"].gotoAndStop(2);
         startOutfire();
      }
      
      private static function startOutfire() : void
      {
         var _loc1_:int = 0;
         _loc1_ = 0;
         while(_loc1_ < 3)
         {
            _fireList.push(_map.conLevel["fire" + _loc1_]);
            _handList.push(_map.conLevel["hand" + _loc1_]);
            _handList[_loc1_].visible = true;
            _fireList[_loc1_].buttonMode = true;
            _fireList[_loc1_].addEventListener(MouseEvent.CLICK,onClickFire);
            _handList[_loc1_].buttonMode = true;
            _handList[_loc1_].addEventListener(MouseEvent.CLICK,onClickFire);
            _loc1_++;
         }
         _fireFrames = [1,1,1];
      }
      
      private static function onClickFire(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:int = _fireList.indexOf(_loc2_);
         if(_loc3_ == -1)
         {
            _loc3_ = _handList.indexOf(_loc2_);
         }
         _fireList[_loc3_].gotoAndStop(_fireFrames[_loc3_] + 1);
         ++_fireFrames[_loc3_];
         if(_fireFrames[_loc3_] == 4)
         {
            DisplayUtil.removeForParent(_fireList[_loc3_]);
            DisplayUtil.removeForParent(_handList[_loc3_]);
            _map.conLevel["pet" + _loc3_].gotoAndStop(1);
         }
         if(_fireFrames[0] == 4 && _fireFrames[1] == 4 && _fireFrames[2] == 4)
         {
            outFireSucceed();
         }
      }
      
      private static function outFireSucceed() : void
      {
         NpcDialog.show(NPC.SEER,["太好了，这下守护部落总算是脱离险境了，不知道是否还能找到守护一族的幸存者？？"],["大家快来，这里有新发现！"],[function():void
         {
            _map.conLevel["stone"].gotoAndStop(2);
            _map.conLevel["stone"].buttonMode = true;
            _map.conLevel["stone"].addEventListener(MouseEvent.CLICK,onClickStone);
            NpcDialog.show(NPC.JIELUNI,["快看，那个废墟地下好像有什么动静，会不会是守护一族啊！我一个人搬不动，大家快来帮忙呀！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["慢着，击碎这些废墟小事一件，这种粗活就让我来吧！你们，先休息一下，看我的！"],["利用头部射击攻击碎石！"],[function():void
               {
                  AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
                  AimatController.start(0);
               }]);
            });
         }]);
      }
      
      private static function onClickStone(param1:Event) : void
      {
         NpcDialog.show(NPC.SEER,["慢着，击碎这些废墟小事一件，这种粗活就让我来吧！你们，先休息一下，看我的！"],["利用头部射击攻击碎石！"],[]);
      }
      
      private static function onShootOver(param1:AimatEvent) : void
      {
         var event:AimatEvent = param1;
         if(_map.conLevel["stone"].hitTestPoint(event.info.endPos.x,event.info.endPos.y))
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_741_2"),function():void
            {
               _map.conLevel["mier"].visible = true;
               MainManager.actorModel.visible = false;
               _map.conLevel["task741_1"].visible = true;
               _map.conLevel["task741_1"].gotoAndStop(1);
               _map.conLevel["stone"].gotoAndStop(1);
               _map.conLevel["stone"].buttonMode = false;
               _map.conLevel["stone"].removeEventListener(MouseEvent.CLICK,onClickStone);
               NpcDialog.show(NPC.GUERZHADI,["可恶，竟然又失手了！这件事情可不能让邪恶异能王知道，否则我的小命可就不保了！"],["你是谁？为什么要摧毁守护部落！"],[function():void
               {
                  TasksManager.complete(TASK_ID,2,startStep2);
               }]);
            });
         }
      }
      
      private static function startStep2(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         MainManager.actorModel.visible = false;
         _map.conLevel["pet0"].visible = true;
         _map.conLevel["pet1"].visible = true;
         _map.conLevel["pet2"].visible = true;
         _map.conLevel["mier"].visible = true;
         _map.conLevel["task741_1"].visible = true;
         _map.conLevel["task741_1"].gotoAndStop(1);
         NpcDialog.show(NPC.GUERZHADI,["哼哼！不知死活的小子，闪一边去，我对你可没什么兴趣！我只知道这个机会等了上万年！如果不是邪恶异能王的觉醒，我想我还在地下长眠呢！呵哈哈哈…."],["什么！难道是邪恶异能王唤醒了你？"],[function():void
         {
            CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_741_3"),function():void
            {
               NpcDialog.show(NPC.MIER,["没错，它就是邪恶异能王的四大守护之一，叫古尔扎迪，只要有它在没有任何人可以破坏邪恶异能王的计划！"],["太可恶了！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["别这么嚣张，有我赛尔在一切邪恶势力将不复存在，接招吧！怪物！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["task741_1"],2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.SEER,["它的实力果然强大，如果硬拼的话可能不是它的对手，我还是在研究一下它的弱点再说！"],["这究竟是什么怪物啊！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["task741_1"],3,"mc3",function():void
                           {
                              NpcDialog.show(NPC.MIER,["赛尔先别急！你自己听清楚，我们是光明异能王的专属守卫队，我们的使命就是与邪恶异能王的邪恶势力抗衡到底，千万不能让它们发现这里的秘密—0xff0000恶魔封印0xffffff！！！！"],["什么！这里还有秘密？？？"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,3,startStep3);
                              }]);
                           });
                        }]);
                     });
                  });
               }]);
            });
         }]);
      }
      
      private static function startStep3(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         MainManager.actorModel.visible = false;
         _map.conLevel["pet0"].visible = true;
         _map.conLevel["pet1"].visible = true;
         _map.conLevel["pet2"].visible = true;
         _map.conLevel["mier"].visible = true;
         _map.conLevel["task741_1"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task741_1"],4,"mc4",function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["哼哼，小赛尔，你果然不死心，居然找到这里来了，难道你不想活命了吗？"],["暗黑，你这个叛徒，我不会原谅你的！"],[function():void
            {
               NpcDialog.show(NPC.ANHEI_SEER,["其实….我说了你也不会信的！其实两个异能王我很早就知道了，既然不可能违背天意，那我只能接受这个事实，这件事情你最好不要插手，我会处理的！"],["放心吧！暗黑，你的计划不可能实现！"],[function():void
               {
                  NpcDialog.show(NPC.ANHEI_SEER,["看来你还是没理解我的意思，这样吧！有件东西我想给你，但是你答应我一定要等我离开后才看，可以吗？"],["什么鬼东西，我才不要呢！"],[function():void
                  {
                     NpcDialog.show(NPC.ANHEI_SEER,["如果你想知道真正的答案，那就打开它吧！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["task741_1"],5,"mc5",function():void
                        {
                           NpcDialog.show(NPC.SEER,["莫名其妙！谁和你是朋友，别乱扯关系！不过看看也无妨，看你还能编造什么谎言！"],["打开电子芯片！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_741_4"),function():void
                              {
                                 MainManager.actorModel.visible = true;
                                 DisplayUtil.removeForParent(_map.conLevel["task741_1"]);
                                 NpcDialog.show(NPC.SEER,["什么！难道暗黑他早就知道会有两个异能王，也知道邪恶异能王的邪恶能力，从他的意思来看…."],["不好，暗黑想牺牲自己来拯救整个星系！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_741_5"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,4,taskComplete);
                                    });
                                 }]);
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function taskComplete(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         MainManager.actorModel.visible = true;
         ToolBarController.showOrHideAllUser(true);
         DisplayUtil.removeForParent(_map.conLevel["task741_1"]);
         DisplayUtil.removeForParent(_map.conLevel["pet0"]);
         DisplayUtil.removeForParent(_map.conLevel["pet1"]);
         DisplayUtil.removeForParent(_map.conLevel["pet2"]);
         DisplayUtil.removeForParent(_map.conLevel["mier"]);
      }
      
      public static function destroy() : void
      {
         if(Boolean(_map) && Boolean(_map.conLevel["hand0"]))
         {
            _map.conLevel["hand0"].removeEventListener(MouseEvent.CLICK,onClickFire);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["fire0"]))
         {
            _map.conLevel["fire0"].removeEventListener(MouseEvent.CLICK,onClickFire);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["hand1"]))
         {
            _map.conLevel["hand1"].removeEventListener(MouseEvent.CLICK,onClickFire);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["fire1"]))
         {
            _map.conLevel["fire1"].removeEventListener(MouseEvent.CLICK,onClickFire);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["hand2"]))
         {
            _map.conLevel["hand2"].removeEventListener(MouseEvent.CLICK,onClickFire);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["fire2"]))
         {
            _map.conLevel["fire2"].removeEventListener(MouseEvent.CLICK,onClickFire);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["stone"]))
         {
            _map.conLevel["stone"].removeEventListener(MouseEvent.CLICK,onClickStone);
         }
         _fireList.length = 0;
         _handList.length = 0;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
         ToolBarController.showOrHideAllUser(true);
         MainManager.actorModel.visible = true;
         _map = null;
      }
      
      public static function get isFight() : Boolean
      {
         return _isFight;
      }
      
      public static function set isFight(param1:Boolean) : void
      {
         _isFight = param1;
      }
   }
}
