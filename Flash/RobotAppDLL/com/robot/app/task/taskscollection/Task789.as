package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_789;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getTimer;
   import org.taomee.utils.DisplayUtil;
   
   public class Task789
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _isFighting:Boolean = false;
      
      private static var markTime:int;
       
      
      public function Task789()
      {
         super();
      }
      
      public static function initTaskForMap507(param1:BaseMapProcess) : void
      {
         _map = param1;
         hideAll();
         _map.conLevel["bulaikeNPC"].buttonMode = true;
         _map.conLevel["bulaikeNPC"].addEventListener(MouseEvent.CLICK,onAcceptTask);
         _map.conLevel["bulaikeNPC"]["signMC"].visible = true;
      }
      
      private static function onAcceptTask(param1:MouseEvent) : void
      {
         var fightFun:Function = null;
         var e:MouseEvent = param1;
         fightFun = function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["作为光明圣坛守护者，我不畏惧任何挑战！但我认为只有一对一的决斗才能证明谁是真正的强者！你有这个胆量吗？"],["OK，我会让你心服口服的！","嘿嘿！让哥哥我再考虑考虑。"],[function():void
            {
               FightManager.fightWithBoss("布莱克",0);
            }]);
         };
         MainManager.actorModel.moveAndAction(new Point(350,200),function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["#101生死决战","与布莱克对战。","算了，我还是先围观吧。"],[function():void
            {
               TasksManager.accept(TaskController_789.TASK_ID,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_789_1"),function():void
                  {
                     MapManager.changeMap(451);
                  },false);
               });
            },fightFun]);
         });
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         _map = param1;
         hideAll();
         _map.conLevel["duduNPC"].visible = true;
         _map.conLevel["duduNPC"].buttonMode = true;
         _map.conLevel["duduNPC"].addEventListener(MouseEvent.CLICK,onFinishStep0);
      }
      
      private static function onFinishStep0(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(430,320),function():void
         {
            NpcDialog.show(NPC.DUDU,["别看我胖嘟嘟的，但我可是真材实料的运动健将哦！"],["#101生死决战","加油！加油！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["嘟嘟，看到兰特了吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DUDU,["哦，就是像膏药一样，经常贴在布莱克身上的那个家伙？"],["额……你这个形容太有创意了！对，就是他。"],[function():void
                  {
                     NpcDialog.show(NPC.DUDU,["嗯，我刚刚去格雷山地散步时遇见他了！不过，似乎有点不对劲哦。"],["？是怎么一回事呀？"],[function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("task_789_4"),function():void
                        {
                           NpcDialog.show(NPC.DUDU,["兰特究竟在阴森恐怖的黯夜地穴干什么呢？他从那地方出来的时候浑身还围绕着黑色雾气。"],["嗯，确实很奇怪。"],[function():void
                           {
                              NpcDialog.show(NPC.DUDU,["而且，紧接着就往邪灵圣殿方向去了……"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["我必须找出答案！希望兰特一切顺利。"],["（前往邪灵圣殿）"],[function():void
                                 {
                                    TasksManager.complete(TaskController_789.TASK_ID,0,function(param1:Boolean):void
                                    {
                                       MapManager.changeMap(506);
                                    });
                                 }]);
                              });
                           }]);
                        });
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      public static function initTaskForMap506(param1:BaseMapProcess) : void
      {
         var arrow:MovieClip;
         var map:BaseMapProcess = param1;
         _map = map;
         hideAll();
         arrow = _map.conLevel["arrow"];
         DisplayUtil.stopAllMovieClip(arrow);
         arrow.visible = false;
         if(_isFighting)
         {
            _isFighting = false;
            return;
         }
         TasksManager.getProStatusList(TaskController_789.TASK_ID,function(param1:Array):void
         {
            var mc:MovieClip = null;
            var a:Array = param1;
            mc = _map.conLevel["task789sleeping"];
            if(Boolean(a[0]) && !a[1])
            {
               NpcDialog.show(NPC.SEER,["呀！自从邪灵组织逃走以后，这里就变得空荡荡的，呜呜，好惊悚哦。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["咦？有个毛球精灵在守卫着邪灵密室，难道里面有什么情况？"],["（点击毛球精灵）"],[function():void
                  {
                     mc.buttonMode = true;
                     mc.addEventListener(MouseEvent.CLICK,onMaoQiuClicked);
                  }]);
               });
            }
            else
            {
               DisplayUtil.removeForParent(mc);
            }
         });
      }
      
      private static function onMaoQiuClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(630,290),function():void
         {
            NpcDialog.show(NPC.MAOQIU,["谁啊，谁啊！打扰我睡觉！"],["嘿嘿，你这个球状体，还记得我吗？"],[function():void
            {
               NpcDialog.show(NPC.MAOQIU,["哼！上次就是你把邪灵圣殿闹得天翻地覆，今天休想进入密室！啊啊啊啊，尝尝我炸弹的厉害！"],["与毛球对战。"],[function():void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightMaoQiuComplete);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightMaoQiuComplete);
                  _isFighting = true;
                  FightManager.fightWithBoss("毛球",1);
               }]);
            }]);
         });
      }
      
      private static function onFightMaoQiuComplete(param1:PetFightEvent) : void
      {
         var mc:MovieClip = null;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightMaoQiuComplete);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.MAOQIU,["呀呀呀！我先开溜。你现在要是进入邪灵密室，就有得好受啦！"],["哈哈哈！胆小鬼！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["task789sleeping"],2,"",function():void
               {
                  NpcDialog.show(NPC.SEER,["看样子，邪灵密室一定有什么情况！"],["（点击石门，解开机关进入）"],[function():void
                  {
                     TasksManager.complete(789,1,function():void
                     {
                        var _loc1_:* = _map.conLevel["arrow"];
                        _loc1_["mc"].play();
                        _loc1_.visible = true;
                        _map.conLevel["door_1"].visible = true;
                        _map.conLevel["door_1"].addEventListener(MouseEvent.CLICK,onDoorClicked);
                     });
                  }]);
               });
            }]);
         }
         else
         {
            mc = _map.conLevel["task789sleeping"];
            NpcDialog.show(NPC.MAOQIU,["破铁皮！知道我的厉害了吧！"],["不行！我要战胜它！"],[function():void
            {
               mc.buttonMode = true;
               mc.addEventListener(MouseEvent.CLICK,onMaoQiuClicked);
            }]);
         }
      }
      
      private static function onDoorClicked(param1:MouseEvent) : void
      {
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["arrow"]["mc"].stop();
      }
      
      public static function initTaskForMap357(param1:BaseMapProcess) : void
      {
         var mc:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         hideAll();
         mc = _map.conLevel["task789mc"];
         if(_isFighting)
         {
            DisplayUtil.removeForParent(mc);
            _isFighting = false;
            return;
         }
         TasksManager.getProStatusList(TaskController_789.TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
            {
               NpcDialog.show(NPC.SEER,["兰特！还有，那不是威斯克吗！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(mc,2,"",function():void
                  {
                     NpcDialog.show(NPC.SEER,["不行，兰特与威斯克交战有危险，我必须帮助他。"],["（点击威斯克对战）"],[function():void
                     {
                        var _loc1_:* = _map.conLevel["task789boss"];
                        _loc1_.buttonMode = true;
                        _loc1_.addEventListener(MouseEvent.CLICK,onFightWithWSK);
                     }]);
                  });
               });
            }
            else
            {
               DisplayUtil.removeForParent(mc);
            }
         });
      }
      
      private static function onFightWithWSK(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(350,450),function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightWSKComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightWSKComplete);
            _isFighting = true;
            FightManager.fightWithBoss("威斯克",1);
         });
      }
      
      private static function onFightWSKComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightWSKComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_789_2"),function():void
         {
            NpcDialog.show(NPC.SEER,["我晕倒，嘿嘿！还是我聪明，看追踪器显示，威斯克往格雷大峡谷方向去了！"],["（前往格雷大峡谷）"],[function():void
            {
               TasksManager.complete(789,3,function():void
               {
                  MapManager.changeMap(454);
               });
            }]);
         });
      }
      
      public static function initTaskForMap454(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         hideAll();
         TasksManager.getProStatusList(TaskController_789.TASK_ID,function(param1:Array):void
         {
            var mc:MovieClip = null;
            var a:Array = param1;
            mc = _map.conLevel["task789mc"];
            if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && !a[4])
            {
               mc["guideMC"].visible = false;
               NpcDialog.show(NPC.SEER,["不好，兰特快跌入峡谷了！"],["（按提示点击鼠标的左键）"],[function():void
               {
                  mc["guideMC"].visible = true;
                  mc["clickMC"].buttonMode = true;
                  mc["clickMC"].addEventListener(MouseEvent.CLICK,onSaveLante);
                  mc["clickMC"].addEventListener(Event.ENTER_FRAME,checkProcess);
                  markTime = getTimer();
               }]);
            }
            else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && Boolean(a[4]) && !a[5])
            {
               initForLastStep();
            }
            else
            {
               DisplayUtil.removeForParent(mc);
            }
         });
      }
      
      private static function onSaveLante(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var bar:MovieClip = _map.conLevel["task789mc"]["bloodMC"]["perMC"];
         var crtFrame:int = bar.currentFrame + 10;
         if(crtFrame > 99)
         {
            bar.gotoAndStop(100);
            clearSaveListeners();
            DisplayUtil.removeForParent(_map.conLevel["task789mc"]["bloodMC"]);
            DisplayUtil.removeForParent(_map.conLevel["task789mc"]["guideMC"]);
            AnimateManager.playMcAnimate(_map.conLevel["task789mc"]["lanteMC"],2,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["哎呦喂，总算把你给拉上来了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LANTE,["谢谢你" + MainManager.actorInfo.formatNick + "，我追踪威斯克来到大峡谷，正好布莱克也赶来找我。为了保护我，他用身体阻挡威斯克的攻击……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.LANTE,["威斯克太强了，布莱克现在处境很危险，我们必须赶紧出手相助！"],["（点击布莱克）"],[function():void
                     {
                        TasksManager.complete(789,4,function():void
                        {
                           initForLastStep();
                        });
                     }]);
                  });
               });
            });
         }
         else if(crtFrame == 11)
         {
            bar.parent.visible = true;
            bar.gotoAndStop(crtFrame);
         }
         else
         {
            bar.gotoAndStop(crtFrame);
         }
      }
      
      private static function clearSaveListeners() : void
      {
         var _loc1_:MovieClip = _map.conLevel["task789mc"];
         if(_loc1_)
         {
            _loc1_["clickMC"].removeEventListener(MouseEvent.CLICK,onSaveLante);
            _loc1_["clickMC"].removeEventListener(Event.ENTER_FRAME,checkProcess);
         }
      }
      
      private static function checkProcess(param1:Event) : void
      {
         var _loc2_:int = getTimer() - markTime;
         if(_loc2_ < 100)
         {
            return;
         }
         _loc2_ *= 0.01;
         var _loc3_:MovieClip = _map.conLevel["task789mc"]["bloodMC"]["perMC"];
         var _loc4_:int = _loc3_.currentFrame - _loc2_;
         markTime = getTimer();
         if(_loc4_ < 0)
         {
            _loc4_ = 0;
         }
         _loc3_.gotoAndStop(_loc4_);
      }
      
      private static function initForLastStep() : void
      {
         var _loc1_:MovieClip = _map.conLevel["task789mc"];
         _loc1_["clickMC"].buttonMode = false;
         if(_loc1_["bloodMC"])
         {
            DisplayUtil.removeForParent(_loc1_["bloodMC"]);
         }
         if(_loc1_["guideMC"])
         {
            DisplayUtil.removeForParent(_loc1_["guideMC"]);
         }
         _loc1_["lanteMC"].gotoAndStop(3);
         clearSaveListeners();
         _loc1_["blkhitMC"].buttonMode = true;
         _loc1_["blkhitMC"].addEventListener(MouseEvent.CLICK,onfinishMC);
      }
      
      private static function onfinishMC(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_789_3"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_789_5"),function():void
            {
               TasksManager.complete(789,5,function():void
               {
                  _map.conLevel["task789mc"]["blkhitMC"].removeEventListener(MouseEvent.CLICK,onfinishMC);
                  DisplayUtil.removeForParent(_map.conLevel["task789mc"]);
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 507)
         {
            _map.conLevel["bulaikeNPC"].removeEventListener(MouseEvent.CLICK,onAcceptTask);
         }
         else if(MapManager.currentMap.id == 451)
         {
            _map.conLevel["duduNPC"].removeEventListener(MouseEvent.CLICK,onFinishStep0);
         }
         else if(MapManager.currentMap.id == 506)
         {
            if(_map.conLevel["task789sleeping"])
            {
               _map.conLevel["task789sleeping"].removeEventListener(MouseEvent.CLICK,onMaoQiuClicked);
            }
            _map.conLevel["door_1"].removeEventListener(MouseEvent.CLICK,onDoorClicked);
         }
         else if(MapManager.currentMap.id == 357)
         {
            _map.conLevel["task789boss"].removeEventListener(MouseEvent.CLICK,onFightWithWSK);
         }
         else if(MapManager.currentMap.id == 454)
         {
            clearSaveListeners();
            if(_map.conLevel["task789mc"]["blkhitMC"])
            {
               _map.conLevel["task789mc"]["blkhitMC"].removeEventListener(MouseEvent.CLICK,onfinishMC);
            }
         }
         _map = null;
         showAll();
      }
      
      private static function hideAll() : void
      {
         ToolBarController.showOrHideAllUser(false);
      }
      
      private static function showAll() : void
      {
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
