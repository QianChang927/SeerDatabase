package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_605;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.manager.CursorManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.TimerUtil;
   
   public class Task605
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _pos:Array = [400,458,446,460,284,254,582,156,456,352];
      
      public static var fightFailNum:uint = 0;
      
      private static var tengMan_mc:MovieClip;
      
      private static var jucksAppear_mc:MovieClip;
      
      private static var jucksDisappear_mc:MovieClip;
      
      private static var yan1_mc:MovieClip;
      
      private static var yan2_mc:MovieClip;
      
      private static var yan3_mc:MovieClip;
      
      private static var mudEffect_mc:MovieClip;
      
      public static var juck1Suc:Boolean = false;
      
      private static var arrow_mc:MovieClip;
      
      private static var targetPoint:Point;
      
      private static var OldTargetPoint:Point;
      
      private static var fire1_mc:MovieClip;
      
      private static var fire2_mc:MovieClip;
      
      private static var fire3_mc:MovieClip;
      
      private static var mud1_mc:MovieClip;
      
      private static var mud2_mc:MovieClip;
      
      private static var mud3_mc:MovieClip;
      
      private static var fireMud_mc:MovieClip;
      
      private static var reduceBloodTimer:Timer;
      
      private static var oldX:Number;
      
      private static var oldY:Number;
      
      private static var selectedMud_mc:MovieClip;
      
      private static var fire1HitNum:uint = 0;
      
      private static var fire2HitNum:uint = 0;
      
      private static var fire3HitNum:uint = 0;
      
      private static var fire1Over:Boolean = false;
      
      private static var fire2Over:Boolean = false;
      
      private static var fire3Over:Boolean = false;
      
      private static var reduceBloodNum:uint = 0;
      
      private static var blood_mc:MovieClip;
      
      private static var fillMudNum:uint = 0;
      
      private static var isSuc:Boolean;
      
      private static var allMudNum:uint = 8;
      
      private static var jucks_red_mc:MovieClip;
      
      private static var fightFailNum2:uint = 0;
      
      private static var isAttack:Boolean = false;
      
      private static var fightWithJucks2Suc:Boolean = false;
      
      private static var bloodNumIcon_mc:MovieClip;
      
      private static var jucks1_mc:MovieClip;
      
      private static var jucks2_mc:MovieClip;
      
      private static var jucks3_mc:MovieClip;
      
      private static var jucks_mc:MovieClip;
      
      private static var hasJucksClickNum:uint = 0;
      
      private static var fightFailNum3:uint = 0;
      
      private static var findGreenJucksNum:uint = 0;
      
      public static var isSendToMap1FromTask605:Boolean = false;
      
      private static var panel1:AppModel;
       
      
      public function Task605()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_0"),function():void
         {
            NpcDialog.show(NPC.IRIS,["最奇怪的是，在整个宇宙中，我们发现了3个能量相同的精灵信号……我不知道这到底怎么了……难道是咤克斯的？"],["事不宜迟了！我这就去墨杜萨星一探究竟！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_2"),function():void
               {
                  MapManager.changeMap(437);
               });
            }]);
         });
      }
      
      public static function initTask_437(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var status:uint = uint(TasksManager.getTaskStatus(TaskController_605.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_605.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startProOne();
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
         }
      }
      
      private static function startProOne() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_1"),function():void
         {
            NpcDialog.show(NPC.SEER,["这……这到底是怎么一回事！咤克斯变成了3个？我……我这是在做梦嘛！"],["咦？好像有博士的信号！"],[function():void
            {
               showDoctor();
            }]);
         });
      }
      
      private static function showDoctor() : void
      {
         if(panel1 == null)
         {
            panel1 = new AppModel(ClientConfig.getTaskModule("TaskPanel_605_1"),"正在打开通讯面板");
            panel1.setup();
         }
         panel1.show();
      }
      
      public static function closeDoctorDia() : void
      {
         TasksManager.complete(TaskController_605.TASK_ID,0,function(param1:Boolean):void
         {
            if(param1)
            {
               MapManager.changeMap(54);
            }
         });
      }
      
      public static function initTask_54(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         yan1_mc = _map.conLevel["yan1_mc"];
         yan2_mc = _map.conLevel["yan2_mc"];
         yan3_mc = _map.conLevel["yan3_mc"];
         tengMan_mc = _map.conLevel["tengMan_mc"];
         jucksAppear_mc = _map.conLevel["jucksAppear_mc"];
         jucksDisappear_mc = _map.conLevel["jucksDisappear_mc"];
         mudEffect_mc = _map.conLevel["mudEffect_mc"];
         arrow_mc = _map.conLevel["arrow"];
         mudEffect_mc.gotoAndStop(1);
         status = uint(TasksManager.getTaskStatus(TaskController_605.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeMCMap_54();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_605.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && !a[1])
               {
                  if(fightFailNum == 0)
                  {
                     NpcDialog.show(NPC.SEER,["根据博士的指示，我们现在先前往露希欧星球寻找贪婪的化身！它会躲藏在地底下，能否找到它就看你的了！"],["（可以利用推车）"],[function():void
                     {
                        if(arrow_mc)
                        {
                           arrow_mc.visible = true;
                        }
                     }]);
                  }
                  if(juck1Suc)
                  {
                     fightSucDialog();
                  }
                  else if(fightFailNum == 3)
                  {
                     fightSucDialog();
                  }
                  else if(fightFailNum > 0)
                  {
                     jucksAppear_mc.gotoAndPlay(2);
                     MapManager.currentMap.spaceLevel.visible = false;
                     NpcDialog.show(NPC.JUCKS_PURPLE,["呵呵！你是战胜不了我的！只要你肯成为我的部下，你将拥有半个宇宙哦！"],["再战一次!","我不会输给你的！"],[fightWithJucks1,function():void
                     {
                        MapManager.currentMap.spaceLevel.visible = true;
                        jucksAppear_mc.addEventListener(MouseEvent.CLICK,onJucksFightClick);
                        jucksAppear_mc.buttonMode = true;
                     }]);
                  }
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeMCMap_54();
         }
      }
      
      public static function startProTwo() : void
      {
         CursorManager.removeCursor();
         CursorManager.setCursor(UIManager.getSprite("Cursor_AimatSkin"));
         LevelManager.mapLevel.mouseChildren = false;
         MapManager.currentMap.depthLevel.mouseChildren = false;
         MapManager.currentMap.depthLevel.mouseEnabled = false;
         LevelManager.mapLevel.addEventListener(MouseEvent.CLICK,onAimClick);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,onWalkEnd);
      }
      
      private static function onAimClick(param1:MouseEvent) : void
      {
         targetPoint = new Point(LevelManager.mapLevel.mouseX,LevelManager.mapLevel.mouseY);
         OldTargetPoint = new Point(targetPoint.x,targetPoint.y);
         if(targetPoint.x > MainManager.actorModel.pos.x)
         {
            targetPoint.x -= 20;
         }
         else
         {
            targetPoint.x += 20;
         }
         if(targetPoint.y > MainManager.actorModel.pos.y)
         {
            targetPoint.y -= 20;
         }
         else
         {
            targetPoint.y += 20;
         }
         var _loc2_:Boolean = Boolean(MapManager.currentMap.isBlock(targetPoint));
         if(_loc2_)
         {
            LevelManager.mapLevel.mouseChildren = true;
            MapManager.currentMap.depthLevel.mouseChildren = true;
            MapManager.currentMap.depthLevel.mouseEnabled = true;
            MainManager.actorModel.walkAction(targetPoint);
         }
      }
      
      private static function removeMCMap_54() : void
      {
         if(yan1_mc)
         {
            DisplayUtil.removeForParent(yan1_mc);
         }
         if(yan2_mc)
         {
            DisplayUtil.removeForParent(yan2_mc);
         }
         if(yan3_mc)
         {
            DisplayUtil.removeForParent(yan3_mc);
         }
         if(tengMan_mc)
         {
            DisplayUtil.removeForParent(tengMan_mc);
         }
         if(jucksDisappear_mc)
         {
            DisplayUtil.removeForParent(jucksDisappear_mc);
         }
         if(mudEffect_mc)
         {
            DisplayUtil.removeForParent(mudEffect_mc);
         }
      }
      
      private static function onWalkEnd(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(MainManager.actorModel.sprite.hitTestObject(yan1_mc))
         {
            tengMan_mc.x = jucksDisappear_mc.x = 11;
            tengMan_mc.y = jucksDisappear_mc.y = 11;
            playJucksAppear();
         }
         else if(MainManager.actorModel.sprite.hitTestObject(yan2_mc))
         {
            tengMan_mc.x = jucksDisappear_mc.x = 18;
            tengMan_mc.y = jucksDisappear_mc.y = 131;
            playJucksAppear();
         }
         else if(MainManager.actorModel.sprite.hitTestObject(yan3_mc))
         {
            tengMan_mc.x = jucksDisappear_mc.x = 503;
            tengMan_mc.y = jucksDisappear_mc.y = 21;
            playJucksAppear();
         }
         else
         {
            mudEffect_mc.x = OldTargetPoint.x;
            mudEffect_mc.y = OldTargetPoint.y;
            AnimateManager.playMcAnimate(mudEffect_mc,0,"",function():void
            {
               mudEffect_mc.gotoAndStop(1);
            });
         }
      }
      
      private static function playJucksAppear() : void
      {
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onAimClick);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,onWalkEnd);
         CursorManager.removeCursor();
         mudEffect_mc.x = OldTargetPoint.x;
         mudEffect_mc.y = OldTargetPoint.y;
         mudEffect_mc.addEventListener(Event.ENTER_FRAME,onMudEffectFrameHandler);
         mudEffect_mc.gotoAndPlay(2);
      }
      
      private static function onMudEffectFrameHandler(param1:Event) : void
      {
         var e:Event = param1;
         if(mudEffect_mc.currentFrame == mudEffect_mc.totalFrames)
         {
            mudEffect_mc.gotoAndStop(1);
            mudEffect_mc.removeEventListener(Event.ENTER_FRAME,onMudEffectFrameHandler);
            AnimateManager.playMcAnimate(tengMan_mc,0,"",function():void
            {
               jucksAppear_mc.gotoAndPlay(2);
               jucksAppear_mc.addEventListener(Event.ENTER_FRAME,onJucksAppearFrameHandler);
            });
         }
      }
      
      private static function onJucksAppearFrameHandler(param1:Event) : void
      {
         var e:Event = param1;
         if(jucksAppear_mc.totalFrames == jucksAppear_mc.currentFrame)
         {
            jucksAppear_mc.removeEventListener(Event.ENTER_FRAME,onJucksAppearFrameHandler);
            MapManager.currentMap.spaceLevel.visible = false;
            NpcDialog.show(NPC.JUCKS_PURPLE,["贪婪来源于自身！你想不想拥有更多的财富和无尽的能量呢？我都能满足你！"],["少废话！决一胜负吧！(点击紫色咤克斯)"],[function():void
            {
               MapManager.currentMap.spaceLevel.visible = true;
               jucksAppear_mc.addEventListener(MouseEvent.CLICK,onJucksFightClick);
               jucksAppear_mc.buttonMode = true;
            }]);
         }
      }
      
      private static function onJucksFightClick(param1:MouseEvent) : void
      {
         fightWithJucks1();
      }
      
      private static function fightWithJucks1() : void
      {
         FightManager.fightWithBoss("紫色咤克斯",2);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            juck1Suc = true;
         }
         else
         {
            ++fightFailNum;
         }
      }
      
      private static function fightSucDialog() : void
      {
         tengMan_mc.removeEventListener(MouseEvent.CLICK,onJucksFightClick);
         MapManager.currentMap.spaceLevel.visible = false;
         jucksAppear_mc.gotoAndPlay(2);
         NpcDialog.show(NPC.JUCKS_PURPLE,["什么……啊……你为什么一点贪婪的欲望都没有……可恶……"],["额……怎么了？"],[function():void
         {
            MapManager.currentMap.spaceLevel.visible = true;
            jucksAppear_mc.visible = false;
            jucksDisappear_mc.addEventListener(Event.ENTER_FRAME,onEnterFrameHandler);
            jucksDisappear_mc.gotoAndPlay(2);
         }]);
      }
      
      private static function onEnterFrameHandler(param1:Event) : void
      {
         var e:Event = param1;
         if(jucksDisappear_mc.currentFrame == jucksDisappear_mc.totalFrames)
         {
            jucksDisappear_mc.removeEventListener(Event.ENTER_FRAME,onEnterFrameHandler);
            NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "," + MainManager.actorInfo.formatNick + ",你能收到我的无线短信吗？一个黑色能量已经消失了！现在你快前往火山星！"],["博士我需要注意些什么呢？"],[function():void
            {
               NpcDialog.show(NPC.DOCTOR,["那是来自愤怒的力量！你记得用地上的沙泥填补地面的火焰！它就会现身！"],["我现在就去！（火山星出发）"],[function():void
               {
                  TasksManager.complete(TaskController_605.TASK_ID,1,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MapManager.changeMap(15);
                     }
                  });
               }]);
            }]);
         }
      }
      
      private static function closeFightHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
      }
      
      public static function initTask_15(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         fire1_mc = _map.conLevel["fire1_mc"];
         fire2_mc = _map.conLevel["fire2_mc"];
         fire3_mc = _map.conLevel["fire3_mc"];
         mud1_mc = _map.conLevel["mud1_mc"];
         mud2_mc = _map.conLevel["mud2_mc"];
         mud3_mc = _map.conLevel["mud3_mc"];
         fireMud_mc = _map.conLevel["fireMud_mc"];
         jucks_red_mc = _map.conLevel["jucks_red_mc"];
         fire1_mc.gotoAndStop("over");
         fire2_mc.gotoAndStop("over");
         fire3_mc.gotoAndStop("over");
         status = uint(TasksManager.getTaskStatus(TaskController_605.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeMCMap_15();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_605.TASK_ID,function(param1:Array):void
            {
               var i:uint = 0;
               var mud_mc:MovieClip = null;
               var a:Array = param1;
               if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
               {
                  if(fire1Over && fire2Over && fire3Over)
                  {
                     if(fightWithJucks2Suc)
                     {
                        fightJucks2SucDialog();
                     }
                     else if(fightFailNum2 == 3)
                     {
                        jucks_red_mc.gotoAndStop(2);
                        NpcDialog.show(NPC.JUCKS_RED,["哈哈哈哈……哈哈哈！！我……哎呀……我的能量为何在消退！我不能高兴！我是愤怒之神……啊……"],["原来愤怒是不可以高兴的！"],[function():void
                        {
                           AnimateManager.playMcAnimate(jucks_red_mc,3,"mc",function():void
                           {
                              NpcDialog.show(NPC.DOCTOR,["好样的！现在是时候前往戴斯星了！黑色的噩梦结束吧！下一个化身它是恐惧化身！它可能会躲藏在任何一个角落里！你一定要注意看！"],["前往戴斯星！"],[function():void
                              {
                                 TasksManager.complete(TaskController_605.TASK_ID,2,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(435);
                                    }
                                 });
                              }]);
                           });
                        }]);
                        fightFailNum2 = 0;
                     }
                     else
                     {
                        MapManager.currentMap.spaceLevel.visible = false;
                        AnimateManager.playMcAnimate(jucks_red_mc,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.JUCKS_RED,["哈哈哈！！！真是不堪一击的弱者！哎呀！我不能高兴！"],["有本事再来！"],[function():void
                           {
                              MapManager.currentMap.spaceLevel.visible = true;
                              jucks_red_mc.addEventListener(MouseEvent.CLICK,onJucksRedClick);
                              jucks_red_mc.buttonMode = true;
                           }]);
                        });
                     }
                  }
                  else
                  {
                     fire1_mc.gotoAndStop(1);
                     fire2_mc.gotoAndStop(1);
                     fire3_mc.gotoAndStop(1);
                     selectedMud_mc = null;
                     fire1HitNum = fire2HitNum = fire3HitNum = 0;
                     reduceBloodNum = 0;
                     fire1Over = fire2Over = fire3Over = false;
                     i = 1;
                     while(i <= 3)
                     {
                        mud_mc = _map.conLevel.getChildByName("mud" + i + "_mc") as MovieClip;
                        mud_mc.addEventListener(MouseEvent.CLICK,onMudClick);
                        mud_mc.buttonMode = true;
                        i++;
                     }
                     startProThree();
                  }
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeMCMap_15();
         }
      }
      
      private static function onMudClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(selectedMud_mc == null)
         {
            selectedMud_mc = _loc2_;
            oldX = _loc2_.x;
            oldY = _loc2_.y;
            _loc2_.startDrag(true);
         }
         else
         {
            selectedMud_mc.stopDrag();
            if(selectedMud_mc.hitTestObject(fire1_mc) && !fire1Over)
            {
               ++fire1HitNum;
               if(!fire1Over)
               {
                  selectedMud_mc.visible = false;
                  fireMud_mc.x = selectedMud_mc.x;
                  fireMud_mc.y = selectedMud_mc.y;
                  AnimateManager.playMcAnimate(fireMud_mc,2,"mc",mudEffect);
                  fire1_mc.gotoAndStop(fire1HitNum + 1);
               }
               if(fire1HitNum == 2)
               {
                  fire1Over = true;
               }
            }
            else if(selectedMud_mc.hitTestObject(fire2_mc) && !fire2Over)
            {
               ++fire2HitNum;
               if(!fire2Over)
               {
                  selectedMud_mc.visible = false;
                  fireMud_mc.x = selectedMud_mc.x;
                  fireMud_mc.y = selectedMud_mc.y;
                  AnimateManager.playMcAnimate(fireMud_mc,2,"mc",mudEffect);
                  fire2_mc.gotoAndStop(fire2HitNum + 1);
               }
               if(fire2HitNum == 3)
               {
                  fire2Over = true;
               }
            }
            else if(selectedMud_mc.hitTestObject(fire3_mc) && !fire3Over)
            {
               ++fire3HitNum;
               if(!fire3Over)
               {
                  selectedMud_mc.visible = false;
                  fireMud_mc.x = selectedMud_mc.x;
                  fireMud_mc.y = selectedMud_mc.y;
                  AnimateManager.playMcAnimate(fireMud_mc,2,"mc",mudEffect);
                  fire3_mc.gotoAndStop(fire3HitNum + 1);
               }
               if(fire3HitNum == 3)
               {
                  fire3Over = true;
               }
            }
            else
            {
               selectedMud_mc.x = oldX;
               selectedMud_mc.y = oldY;
               selectedMud_mc = null;
            }
            if(fire1Over && fire2Over && fire3Over)
            {
               gameSuc();
               fire1HitNum = fire2HitNum = fire3HitNum = 0;
            }
         }
      }
      
      private static function mudEffect() : void
      {
         if(selectedMud_mc)
         {
            selectedMud_mc.visible = true;
            selectedMud_mc.x = oldX;
            selectedMud_mc.y = oldY;
            selectedMud_mc = null;
         }
      }
      
      private static function removeMCMap_15() : void
      {
         if(fire1_mc)
         {
            DisplayUtil.removeForParent(fire1_mc);
         }
         if(fire2_mc)
         {
            DisplayUtil.removeForParent(fire2_mc);
         }
         if(fire3_mc)
         {
            DisplayUtil.removeForParent(fire3_mc);
         }
         if(mud1_mc)
         {
            DisplayUtil.removeForParent(mud1_mc);
         }
         if(mud2_mc)
         {
            DisplayUtil.removeForParent(mud2_mc);
         }
         if(mud3_mc)
         {
            DisplayUtil.removeForParent(mud3_mc);
         }
         if(fireMud_mc)
         {
            DisplayUtil.removeForParent(fireMud_mc);
         }
      }
      
      private static function startProThree() : void
      {
         blood_mc = MapManager.currentMap.libManager.getMovieClip("bloodBar");
         MainManager.actorModel.sprite.addChild(blood_mc);
         blood_mc.x -= blood_mc.width / 2;
         blood_mc.y -= MainManager.actorModel.sprite.height;
         NpcDialog.show(NPC.SEER,["什么……这里的精灵看来都变得十分奇怪……小心！快用地上的沙泥填补地上的火焰吧！"],["（利用地上的沙泥）"],[function():void
         {
            createOgre();
         }]);
      }
      
      private static function createOgre() : void
      {
         var _loc3_:Point = null;
         var _loc5_:OgreModel = null;
         var _loc6_:MovieClip = null;
         var _loc1_:uint = 5;
         var _loc2_:uint = 38;
         OgreModel.isShow = true;
         isAttack = false;
         var _loc4_:uint = 1;
         while(_loc4_ <= _loc1_)
         {
            (_loc5_ = new OgreModel(_loc4_)).name = "ogre" + _loc4_;
            _loc5_.isPurseFlag = true;
            _loc6_ = MapManager.currentMap.libManager.getMovieClip("smallFire");
            _loc6_.scaleX = _loc6_.scaleY = 3.3;
            _loc5_.sprite.addChild(_loc6_);
            _loc6_.y -= _loc5_.height + 6;
            _loc6_.name = "fire_mc";
            _loc3_ = new Point(_pos[(_loc4_ - 1) * 2],_pos[(_loc4_ - 1) * 2 + 1]);
            _loc5_.show(_loc2_,_loc3_);
            _loc5_.addEventListener(Event.ENTER_FRAME,onOgreEnterFrameHandler);
            _loc4_++;
         }
      }
      
      private static function onOgreEnterFrameHandler(param1:Event) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         if(Boolean(_loc2_.hitTestObject(MainManager.actorModel.sprite)) && !isAttack)
         {
            TimerUtil.clearGTimeout(reduceBloodTimer);
            reduceBloodTimer = TimerUtil.setGTimeout(reduceBloodFun,1000);
            isAttack = true;
         }
      }
      
      private static function reduceBloodFun() : void
      {
         var _loc1_:MovieClip = null;
         TimerUtil.clearGTimeout(reduceBloodTimer);
         ++reduceBloodNum;
         if(_loc1_ == null)
         {
            _loc1_ = MapManager.currentMap.libManager.getMovieClip("BloodRuduceEffect");
            if(_loc1_)
            {
               blood_mc.addChild(_loc1_);
            }
         }
         if(_loc1_)
         {
            _loc1_.x = 40;
            _loc1_.y = -20;
            _loc1_.gotoAndPlay(2);
         }
         if(bloodNumIcon_mc == null)
         {
            bloodNumIcon_mc = MapManager.currentMap.libManager.getMovieClip("BloodNumIcon");
            if(bloodNumIcon_mc)
            {
               blood_mc.addChild(bloodNumIcon_mc);
               bloodNumIcon_mc.x = 71;
               bloodNumIcon_mc.y = -13;
            }
         }
         if(bloodNumIcon_mc)
         {
            bloodNumIcon_mc.gotoAndStop(reduceBloodNum + 1);
         }
         blood_mc.gotoAndStop(reduceBloodNum + 1);
         isAttack = false;
         if(reduceBloodNum >= 25)
         {
            reduceBloodNum = 0;
            gameFail();
            fire1HitNum = fire2HitNum = fire3HitNum = 0;
            fire1Over = fire2Over = fire3Over = false;
         }
      }
      
      private static function gameSuc() : void
      {
         TimerUtil.clearGTimeout(reduceBloodTimer);
         removeOgreEvent();
         jucks_red_mc.gotoAndStop(2);
         MapManager.currentMap.spaceLevel.visible = false;
         NpcDialog.show(NPC.JUCKS_RED,["是谁！是谁阻止我掌控整个宇宙！是谁！我决不饶恕你！"],["放马过来吧！(点击红色咤克斯)"],[function():void
         {
            MapManager.currentMap.spaceLevel.visible = true;
            jucks_red_mc.addEventListener(MouseEvent.CLICK,onJucksRedClick);
            jucks_red_mc.buttonMode = true;
         }]);
      }
      
      private static function onJucksRedClick(param1:MouseEvent) : void
      {
         fightWithJucks2();
      }
      
      private static function fightWithJucks2() : void
      {
         FightManager.fightWithBoss("红色咤克斯",0);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler2);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete2);
      }
      
      private static function onFightComplete2(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler2);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete2);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            fightWithJucks2Suc = true;
         }
         else
         {
            ++fightFailNum2;
         }
      }
      
      private static function fightJucks2SucDialog() : void
      {
         jucks_red_mc.gotoAndStop(2);
         MapManager.currentMap.spaceLevel.visible = false;
         NpcDialog.show(NPC.JUCKS_RED,["我为什么会输给你呢……为什么……"],["消失吧！愤怒的黑色能量！"],[function():void
         {
            AnimateManager.playMcAnimate(jucks_red_mc,3,"mc",function():void
            {
               NpcDialog.show(NPC.DOCTOR,["好样的！现在是时候前往戴斯星了！黑色的噩梦结束吧！下一个化身它是恐惧化身！它可能会躲藏在任何一个角落里！你一定要注意看！"],["前往戴斯星！"],[function():void
               {
                  TasksManager.complete(TaskController_605.TASK_ID,2,function(param1:Boolean):void
                  {
                     MapManager.currentMap.spaceLevel.visible = true;
                     if(param1)
                     {
                        MapManager.changeMap(435);
                     }
                  });
               }]);
            });
         }]);
      }
      
      private static function closeFightHandler2(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler2);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete2);
      }
      
      private static function removeOgreEvent() : void
      {
         var _loc3_:String = null;
         var _loc4_:OgreModel = null;
         var _loc5_:MovieClip = null;
         var _loc1_:uint = 5;
         var _loc2_:uint = 1;
         while(_loc2_ <= _loc1_)
         {
            _loc3_ = "ogre" + _loc2_;
            if(_loc4_ = MapManager.currentMap.depthLevel.getChildByName(_loc3_) as OgreModel)
            {
               if(_loc5_ = _loc4_.sprite.getChildByName("fire_mc") as MovieClip)
               {
                  _loc4_.sprite.removeChild(_loc5_);
               }
               _loc4_.removeEventListener(Event.ENTER_FRAME,onOgreEnterFrameHandler);
            }
            _loc2_++;
         }
      }
      
      private static function gameFail() : void
      {
         if(MainManager.actorModel.sprite.contains(blood_mc))
         {
            MainManager.actorModel.sprite.removeChild(blood_mc);
         }
         TimerUtil.clearAllTimeout();
         isAttack = false;
         isSendToMap1FromTask605 = true;
         MapManager.changeMap(1);
      }
      
      public static function initTask_1(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(isSendToMap1FromTask605)
         {
            isSendToMap1FromTask605 = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_3"),function():void
            {
               SimpleAlarm.show("您的装备已经修复完毕",true);
               NpcDialog.show(NPC.SEER,["整修完毕！这次一定要小心火焰贝的攻击！"],["快前往火山星吧!"],[function():void
               {
                  MapManager.changeMap(15);
               }]);
            });
         }
      }
      
      public static function initTask_435(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         ToolBarController.showOrHideAllUser(false);
         jucks1_mc = _map.conLevel["jucks1_mc"];
         jucks2_mc = _map.conLevel["jucks2_mc"];
         jucks3_mc = _map.conLevel["jucks3_mc"];
         jucks_mc = _map.conLevel["jucks_mc"];
         jucks1_mc.gotoAndStop("over");
         jucks2_mc.gotoAndStop("over");
         jucks3_mc.gotoAndStop("over");
         status = uint(TasksManager.getTaskStatus(TaskController_605.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeMCMap_435();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_605.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
               {
                  if(fightFailNum3 == 3)
                  {
                     fightSucDialog3();
                  }
                  else if(fightFailNum3 >= 1)
                  {
                     jucks_mc.gotoAndStop(2);
                     NpcDialog.show(NPC.JUCKS_GREEN,["你难道真的不害怕黑暗吗……"],["赛尔永无畏惧！"],[function():void
                     {
                        jucks_mc.addEventListener(MouseEvent.CLICK,onTrueJucksClick);
                        jucks_mc.buttonMode = true;
                     }]);
                  }
                  else
                  {
                     startProFour();
                  }
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeMCMap_435();
         }
      }
      
      private static function initMap_435(param1:Boolean) : void
      {
         jucks1_mc.gotoAndPlay(1);
         jucks2_mc.gotoAndPlay(1);
         jucks3_mc.gotoAndPlay(1);
         jucks1_mc.buttonMode = jucks2_mc.buttonMode = jucks3_mc.buttonMode = true;
         jucks1_mc.addEventListener(MouseEvent.CLICK,onJucksClick);
         jucks2_mc.addEventListener(MouseEvent.CLICK,onJucksClick);
         jucks3_mc.addEventListener(MouseEvent.CLICK,onJucksClick);
         hasJucksClickNum = 0;
      }
      
      private static function onJucksClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var target_mc:MovieClip = e.currentTarget as MovieClip;
         target_mc.buttonMode = false;
         target_mc.gotoAndStop("over");
         target_mc.removeEventListener(MouseEvent.CLICK,onJucksClick);
         DisplayUtil.removeForParent(target_mc);
         ++hasJucksClickNum;
         if(hasJucksClickNum == 3)
         {
            hasJucksClickNum = 0;
            jucks_mc.gotoAndStop(2);
            NpcDialog.show(NPC.JUCKS_GREEN,["别再靠近我……我想我们会两败俱伤的……"],["为了整个宇宙的和平，我无所畏惧！（点击绿色咤克斯）"],[function():void
            {
               jucks_mc.addEventListener(MouseEvent.CLICK,onTrueJucksClick);
               jucks_mc.buttonMode = true;
            }]);
         }
      }
      
      private static function onTrueJucksClick(param1:MouseEvent) : void
      {
         fightWithJucks3();
      }
      
      private static function removeMCMap_435() : void
      {
         if(jucks1_mc)
         {
            jucks1_mc.removeEventListener(MouseEvent.CLICK,onJucksClick);
            DisplayUtil.removeForParent(jucks1_mc);
         }
         if(jucks2_mc)
         {
            jucks2_mc.removeEventListener(MouseEvent.CLICK,onJucksClick);
            DisplayUtil.removeForParent(jucks2_mc);
         }
         if(jucks3_mc)
         {
            jucks3_mc.removeEventListener(MouseEvent.CLICK,onJucksClick);
            DisplayUtil.removeForParent(jucks3_mc);
         }
      }
      
      private static function startProFour() : void
      {
         initMap_435(true);
      }
      
      private static function fightWithJucks3() : void
      {
         FightManager.fightWithBoss("绿色咤克斯",3);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler3);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete3);
      }
      
      private static function onFightComplete3(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler3);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete3);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            fightFailNum3 = 3;
         }
         else
         {
            ++fightFailNum3;
         }
      }
      
      private static function fightSucDialog3() : void
      {
         jucks_mc.removeEventListener(MouseEvent.CLICK,onTrueJucksClick);
         jucks_mc.gotoAndStop(2);
         NpcDialog.show(NPC.JUCKS_GREEN,["为什么……为什么你可以永无畏惧！为什么你的内心中没有一点胆怯……为什么……"],["为了正义！为了精灵们！我是赛尔！"],[function():void
         {
            AnimateManager.playMcAnimate(jucks_mc,3,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["结束了吗？黑色的噩梦……"],["我们真的从噩梦中走出来了吗？"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_4"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["又是咤克斯……阴魂不散的家伙！我一定会收拾你的！"],["先赶回资料室向爱丽丝汇报吧！"],[function():void
                     {
                        TasksManager.complete(TaskController_605.TASK_ID,3,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              MapManager.changeMap(9);
                           }
                        });
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function closeFightHandler3(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler3);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete3);
      }
      
      public static function destroy() : void
      {
         TimerUtil.clearGTimeout(reduceBloodTimer);
         CursorManager.removeCursor();
         removeOgreEvent();
         LevelManager.mapLevel.removeEventListener(MouseEvent.CLICK,onAimClick);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,onWalkEnd);
         if(mudEffect_mc)
         {
            mudEffect_mc.removeEventListener(Event.ENTER_FRAME,onMudEffectFrameHandler);
            DisplayUtil.removeForParent(mudEffect_mc);
         }
         if(jucksAppear_mc)
         {
            jucksAppear_mc.removeEventListener(MouseEvent.CLICK,onJucksFightClick);
         }
         if(jucks_mc)
         {
            jucks_mc.removeEventListener(MouseEvent.CLICK,onTrueJucksClick);
         }
         if(jucks_red_mc)
         {
            jucks_red_mc.removeEventListener(MouseEvent.CLICK,onJucksRedClick);
         }
         if(blood_mc)
         {
            if(MainManager.actorModel.sprite.contains(blood_mc))
            {
               MainManager.actorModel.sprite.removeChild(blood_mc);
            }
         }
         if(bloodNumIcon_mc)
         {
            DisplayUtil.removeForParent(bloodNumIcon_mc);
            bloodNumIcon_mc = null;
         }
         _map = null;
         tengMan_mc = null;
         jucksAppear_mc = null;
         jucksDisappear_mc = null;
         yan1_mc = null;
         yan2_mc = null;
         yan3_mc = null;
         mudEffect_mc = null;
         arrow_mc = null;
         fire1_mc = null;
         fire2_mc = null;
         fire3_mc = null;
         mud1_mc = null;
         mud2_mc = null;
         mud3_mc = null;
         fireMud_mc = null;
         reduceBloodTimer = null;
         selectedMud_mc = null;
         blood_mc = null;
         jucks_red_mc = null;
         bloodNumIcon_mc = null;
         jucks1_mc = null;
         jucks2_mc = null;
         jucks3_mc = null;
         jucks_mc = null;
      }
   }
}
