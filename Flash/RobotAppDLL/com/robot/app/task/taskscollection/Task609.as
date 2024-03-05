package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_609;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.Timer;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   import org.taomee.utils.TimerUtil;
   
   public class Task609
   {
      
      private static var _map:BaseMapProcess;
      
      private static var fightOver:Boolean = false;
      
      private static var isUiClean:Boolean = false;
      
      private static var jucks_mc:MovieClip;
      
      private static var bigMC_mc:MovieClip;
      
      private static var hole_mc:MovieClip;
      
      private static var bloodBar_mc:MovieClip;
      
      private static var AllGroup_mc:MovieClip;
      
      private static var selected_mc:MovieClip;
      
      private static var oldX:Number = 0;
      
      private static var oldY:Number = 0;
      
      private static var hasStone:Boolean;
      
      private static var allChosed:Boolean = false;
      
      private static var attackNum:uint = 0;
      
      private static var effectTimer:Timer;
      
      private static var diEn_mc:MovieClip;
      
      private static var iris_mc:MovieClip;
      
      private static var irisFall_mc:MovieClip;
      
      private static var monsterDispear_mc:MovieClip;
      
      private static var arrow_mc:MovieClip;
      
      private static var justin_mc:MovieClip;
      
      private static var dialog_arr:Array = ["穿越时空来到这里，我并不后悔……@迪恩！迪恩！不要走啊！","我是来自其他空间的，我们的部落遭到了咤克斯的攻击……家破人亡！为了改变历史，我独自来到这里……@迪恩！留下来吧！","希望我的家园安然无恙！无论要我牺牲什么我都愿意……@迪恩……好伟大！","那个黑色的能量莫非是传说中的诅咒之子……@迪恩……"];
      
      public static var panel1:AppModel;
       
      
      public function Task609()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_0"),function():void
         {
            NpcDialog.show(NPC.IRIS,["纽斯！纽斯!听的见吗？你那里怎么了？纽斯请回话……"],["啊………………"],[function():void
            {
               NpcController.npcVisible = false;
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_1"),function():void
               {
                  NpcDialog.show(NPC.SHIPER,["赛尔号一级警备！黑色能量已经开始侵蚀赛尔号！全体赛尔出动！准备迎战！" + MainManager.actorInfo.formatNick + "火速前往墨杜萨星追查爱丽丝下落！"],["是的长官！（我这就前往墨杜萨星）"],[function():void
                  {
                     MapManager.changeMap(437);
                  }]);
               });
            }]);
         },false);
      }
      
      public static function initTask_437(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var status:uint = uint(TasksManager.getTaskStatus(TaskController_609.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_609.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startProOne();
                  ToolBarController.showOrHideAllUser(false);
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
         }
      }
      
      public static function initTask_443(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         jucks_mc = _map.conLevel["jucks_mc"];
         AllGroup_mc = _map.conLevel["AllGroup_mc"];
         hole_mc = _map.conLevel["hole_mc"];
         bloodBar_mc = _map.conLevel["bloodBar_mc"];
         bigMC_mc = _map.conLevel["bigMC_mc"];
         diEn_mc = _map.conLevel["diEn_mc"];
         iris_mc = _map.conLevel["iris_mc"];
         irisFall_mc = _map.conLevel["irisFall_mc"];
         monsterDispear_mc = _map.conLevel["monsterDispear_mc"];
         arrow_mc = _map.conLevel["arrow_mc"];
         justin_mc = _map.conLevel["justin_mc"];
         monsterDispear_mc.gotoAndStop(1);
         monsterDispear_mc.visible = false;
         justin_mc.visible = false;
         arrow_mc.visible = false;
         iris_mc.visible = false;
         iris_mc.gotoAndStop(1);
         diEn_mc.gotoAndStop(1);
         diEn_mc.visible = false;
         irisFall_mc.visible = false;
         bigMC_mc.visible = false;
         jucks_mc.visible = false;
         bloodBar_mc.visible = false;
         ToolBarController.showOrHideAllUser(false);
         status = uint(TasksManager.getTaskStatus(TaskController_609.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeTaskResource_443();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_609.TASK_ID,function(param1:Array):void
            {
               MapManager.currentMap.spaceLevel.visible = true;
               if(Boolean(param1[0]) && !param1[1])
               {
                  if(fightOver)
                  {
                     if(isUiClean)
                     {
                        onUIClean();
                     }
                     else
                     {
                        EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
                     }
                  }
                  else
                  {
                     startProTwo();
                  }
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeTaskResource_443();
         }
      }
      
      public static function removeTaskResource_443() : void
      {
         if(jucks_mc)
         {
            DisplayUtil.removeForParent(jucks_mc);
            jucks_mc = null;
         }
         if(AllGroup_mc)
         {
            DisplayUtil.removeForParent(AllGroup_mc);
            AllGroup_mc = null;
         }
         if(hole_mc)
         {
            DisplayUtil.removeForParent(hole_mc);
            hole_mc = null;
         }
         if(bloodBar_mc)
         {
            DisplayUtil.removeForParent(bloodBar_mc);
            bloodBar_mc = null;
         }
         if(bigMC_mc)
         {
            DisplayUtil.removeForParent(bigMC_mc);
            bigMC_mc = null;
         }
         if(irisFall_mc)
         {
            DisplayUtil.removeForParent(irisFall_mc);
            irisFall_mc = null;
         }
         if(diEn_mc)
         {
            DisplayUtil.removeForParent(diEn_mc);
            diEn_mc = null;
         }
         if(iris_mc)
         {
            DisplayUtil.removeForParent(iris_mc);
            iris_mc = null;
         }
         if(monsterDispear_mc)
         {
            DisplayUtil.removeForParent(monsterDispear_mc);
            monsterDispear_mc = null;
         }
         if(justin_mc)
         {
            DisplayUtil.removeForParent(justin_mc);
            justin_mc = null;
         }
      }
      
      private static function startProOne() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_605_2"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_2"),function():void
            {
               TasksManager.complete(TaskController_609.TASK_ID,0,function(param1:Boolean):void
               {
                  MapManager.changeMap(443);
               });
            });
         });
      }
      
      private static function onJucksFightClick(param1:MouseEvent) : void
      {
         fightWithJucks();
      }
      
      private static function fightWithJucks() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
         FightManager.fightWithBoss("紫色咤克斯",0);
      }
      
      private static function onUIClean(param1:RobotEvent = null) : void
      {
         isUiClean = true;
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
         if(fightOver)
         {
            fightAnim();
         }
      }
      
      private static function fightAnim() : void
      {
         var battle_mc:MovieClip = null;
         bloodBar_mc.visible = false;
         jucks_mc.visible = true;
         iris_mc.visible = true;
         hole_mc.visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_4"),function():void
         {
            AllGroup_mc.visible = true;
            arrow_mc.visible = true;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_5"),function():void
            {
               AnimateManager.playMcAnimate(AllGroup_mc.group1_mc,1,"mc1",function():void
               {
                  NpcDialog.show(NPC.HAMO_LEITE,["小个子，每个精灵都具有不同的作用和能量！适当的组合会出现巨大的能量！你快指挥我们攻击咤克斯！"],["一下子指挥这么多精灵……我怕我不行！（不管这么多了）"],[function():void
                  {
                     TasksManager.complete(TaskController_609.TASK_ID,0,function(param1:Boolean):void
                     {
                        initMap443();
                     });
                  }]);
               });
            });
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
         fightOver = true;
      }
      
      private static function closeFightHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,closeFightHandler);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
      }
      
      private static function startProTwo() : void
      {
         hideMC();
         hole_mc.addEventListener(Event.ENTER_FRAME,onHoleAnimEnterFrameHandler);
         hole_mc.gotoAndPlay(2);
      }
      
      private static function hideMC() : void
      {
         jucks_mc.visible = false;
         bloodBar_mc.visible = false;
         AllGroup_mc.visible = false;
         bloodBar_mc.visible = false;
         diEn_mc.visible = false;
      }
      
      private static function onHoleAnimEnterFrameHandler(param1:Event) : void
      {
         var e:Event = param1;
         if(hole_mc.totalFrames == hole_mc.currentFrame)
         {
            hole_mc.removeEventListener(Event.ENTER_FRAME,onHoleAnimEnterFrameHandler);
            hole_mc.visible = false;
            DisplayUtil.removeForParent(hole_mc);
            jucks_mc.visible = true;
            iris_mc.visible = true;
            NpcDialog.show(NPC.JUCKS,["阻碍我成长的都将被摧毁！整个宇宙都是我的！都是我的！！！呵呵……"],["休想！（点击咤克斯进行对战）"],[function():void
            {
               jucks_mc.addEventListener(MouseEvent.CLICK,onJucksFightClick);
               jucks_mc.buttonMode = true;
            }]);
         }
      }
      
      private static function initshowMap() : void
      {
      }
      
      private static function initMap443() : void
      {
         var _loc2_:MovieClip = null;
         attackNum = 0;
         var _loc1_:uint = 1;
         while(_loc1_ <= 5)
         {
            _loc2_ = AllGroup_mc.getChildByName("group" + _loc1_ + "_mc") as MovieClip;
            _loc2_.gotoAndStop(1);
            _loc2_.addEventListener(MouseEvent.CLICK,onGroupClick);
            _loc2_.buttonMode = true;
            _loc1_++;
         }
      }
      
      private static function onGroupClick(param1:MouseEvent) : void
      {
         var target_mc:MovieClip = null;
         var num:uint = 0;
         var myNum:uint = 0;
         var e:MouseEvent = param1;
         target_mc = e.currentTarget as MovieClip;
         if(!hasStone)
         {
            num = uint(target_mc.name.substr(5,1));
            if(num == 5)
            {
               hasStone = true;
               arrow_mc.visible = false;
               target_mc.removeEventListener(MouseEvent.CLICK,onGroupClick);
               target_mc.buttonMode = false;
               AnimateManager.playMcAnimate(target_mc,2,"mc2",function():void
               {
                  target_mc.gotoAndStop(3);
                  AnimateManager.playMcAnimate(jucks_mc,2,"mc2",function():void
                  {
                     bloodBar_mc.visible = true;
                     jucks_mc.gotoAndStop(3);
                  });
               });
            }
            else
            {
               NpcDialog.show(NPC.HAMO_LEITE,["不行！他的黑色能量太强了！我想可能墨杜萨的石化会有用！"],["快选择墨杜萨"],[function():void
               {
               }]);
            }
         }
         else
         {
            ++attackNum;
            myNum = uint(target_mc.name.substr(5,1));
            target_mc.removeEventListener(MouseEvent.CLICK,onGroupClick);
            target_mc.buttonMode = false;
            if(myNum == 1)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_3"),function():void
               {
                  bloodBar_mc.bar_mc.width *= 0.8;
                  target_mc.gotoAndStop(3);
                  if(attackNum == 4)
                  {
                     allChosed = true;
                     AnimateManager.playMcAnimate(jucks_mc,4,"mc4",function():void
                     {
                        var _loc2_:MovieClip = null;
                        var _loc1_:uint = 1;
                        while(_loc1_ <= 5)
                        {
                           _loc2_ = AllGroup_mc.getChildByName("group" + _loc1_ + "_mc") as MovieClip;
                           _loc2_.gotoAndStop(3);
                           _loc1_++;
                        }
                        bloodBar_mc.bar_mc.width = 0;
                        effectTimer = TimerUtil.setGTimeout(closeEffect,2000);
                     });
                  }
               });
            }
            else
            {
               AnimateManager.playMcAnimate(target_mc,2,"mc2",function():void
               {
                  jucks_mc.gotoAndStop(3);
                  target_mc.gotoAndStop(3);
                  switch(myNum)
                  {
                     case 2:
                        bloodBar_mc.bar_mc.width *= 0.95;
                        break;
                     case 3:
                        bloodBar_mc.bar_mc.width *= 0.95;
                        break;
                     case 4:
                        bloodBar_mc.bar_mc.width *= 0.9;
                  }
                  if(attackNum == 4)
                  {
                     allChosed = true;
                     AnimateManager.playMcAnimate(jucks_mc,4,"mc4",function():void
                     {
                        var _loc2_:MovieClip = null;
                        var _loc1_:uint = 1;
                        while(_loc1_ <= 5)
                        {
                           _loc2_ = AllGroup_mc.getChildByName("group" + _loc1_ + "_mc") as MovieClip;
                           _loc2_.gotoAndStop(3);
                           _loc1_++;
                        }
                        bloodBar_mc.bar_mc.width = 0;
                        effectTimer = TimerUtil.setGTimeout(closeEffect,2000);
                     });
                  }
               });
            }
         }
      }
      
      private static function removeGroupEvent() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:uint = 1;
         while(_loc1_ <= 5)
         {
            if(!AllGroup_mc)
            {
               return;
            }
            _loc2_ = AllGroup_mc.getChildByName("group" + _loc1_ + "_mc") as MovieClip;
            if(_loc2_)
            {
               _loc2_.removeEventListener(MouseEvent.CLICK,onGroupClick);
            }
            _loc1_++;
         }
      }
      
      private static function closeEffect() : void
      {
         var _loc1_:MovieClip = null;
         TimerUtil.clearGTimeout(effectTimer);
         removeGroupEvent();
         attackNum = 0;
         bloodBar_mc.visible = false;
         bigMC_mc.visible = true;
         bigMC_mc.gotoAndPlay(2);
         jucks_mc.visible = false;
         bigMC_mc.addEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
      }
      
      private static function onBigMCEnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         if(bigMC_mc.currentFrame == 59)
         {
            bigMC_mc.gotoAndStop(59);
            MovieClipUtil.childStop(bigMC_mc,59);
            bigMC_mc.removeEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
            NpcDialog.show(NPC.DIEN,["几年以前也是这个画面……" + MainManager.actorInfo.formatNick + "的闯入，咤克斯的突袭！精灵们挺身而出，但是又相应的受到黑色攻击……"],null,null,false,function():void
            {
               NpcDialog.show(NPC.DIEN,["接下来雷伊和盖亚会合并一起攻击咤克斯，但是根本无法抵挡住咤克斯的突袭……"],["什……么……"],[function():void
               {
                  bigMC_mc.addEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
                  bigMC_mc.gotoAndPlay(60);
               }]);
            });
         }
         else if(bigMC_mc.currentFrame == 299)
         {
            bigMC_mc.gotoAndStop(299);
            bigMC_mc.removeEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
            NpcDialog.show(NPC.DIEN,["NEO、佐格、艾里逊！三个臭皮匠竟然也会想捍卫宇宙……佐格千万不要往左边攻击咤克斯……"],["为什么迪恩说的和现实一模一样……难道他真的来自未来？"],[function():void
            {
               bigMC_mc.addEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
               bigMC_mc.gotoAndPlay(300);
            }]);
         }
         else if(bigMC_mc.currentFrame == 372)
         {
            bigMC_mc.gotoAndStop(372);
            bigMC_mc.removeEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
            NpcDialog.show(NPC.DIEN,["是贾斯汀出现的时候了……"],["！！！！贾斯汀站长真的出现了！！！迪恩？未来人？"],[function():void
            {
               bigMC_mc.addEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
               bigMC_mc.gotoAndPlay(373);
            }]);
         }
         else if(bigMC_mc.currentFrame == bigMC_mc.totalFrames)
         {
            bigMC_mc.gotoAndStop(bigMC_mc.totalFrames);
            bigMC_mc.removeEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
            NpcDialog.show(NPC.DIEN,["你的剑一定会断的……"],null,null,false,function():void
            {
               showBrokenSword();
            });
         }
      }
      
      private static function showBrokenSword() : void
      {
         if(panel1 == null)
         {
            panel1 = new AppModel(ClientConfig.getTaskModule("TaskPanel1_609"),"正在打开六芒星面板");
            panel1.setup();
         }
         panel1.show();
      }
      
      public static function closeBrokenSword() : void
      {
         NpcDialog.show(NPC.DIEN,["什么……难道……胜利了？不可能啊……"],null,null,false,function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_6"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_609_7"),function():void
               {
                  monsterDispear_mc.visible = true;
                  monsterDispear_mc.addEventListener(Event.ENTER_FRAME,onMonsterDispearFrame);
                  monsterDispear_mc.gotoAndPlay(2);
                  AllGroup_mc.visible = false;
                  bigMC_mc.visible = false;
                  diEn_mc.visible = true;
                  justin_mc.visible = true;
               });
            });
         });
      }
      
      private static function onMonsterDispearFrame(param1:Event) : void
      {
         var e:Event = param1;
         if(monsterDispear_mc.currentFrame == monsterDispear_mc.totalFrames)
         {
            monsterDispear_mc.removeEventListener(Event.ENTER_FRAME,onMonsterDispearFrame);
            DisplayUtil.removeForParent(monsterDispear_mc);
            NpcDialog.show(NPC.SEER,["哈莫雷特……闪光依依……雌雄兔子……你们……你们都到那里去？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.HAMO_LEITE,["我们的使命已经完成了……各咎其责！我们都需要回到各自的原点！小个子你永远都是最棒的！"],["再见了……"],[function():void
               {
                  NpcDialog.show(NPC.DIEN,["我又该去哪里呢？我本不改是这个时空的……我该去哪里？"],["迪恩不要走！"],[function():void
                  {
                     diEn_mc.addEventListener(Event.ENTER_FRAME,onDienEnterFrame);
                     diEn_mc.gotoAndPlay(2);
                  }]);
               }]);
            });
         }
      }
      
      private static function onDienEnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         if(diEn_mc.currentFrame == diEn_mc.totalFrames)
         {
            diEn_mc.stop();
            iris_mc.visible = true;
            diEn_mc.visible = false;
            diEn_mc.removeEventListener(Event.ENTER_FRAME,onDienEnterFrame);
            NpcDialog.show(NPC.SEER,["哎呀！爱丽丝还被黑色瘴气所包围！快就出她吧！"],["（快点击爱丽丝）"],[function():void
            {
               iris_mc.addEventListener(MouseEvent.CLICK,onIrisClick);
               iris_mc.buttonMode = true;
            }]);
         }
      }
      
      private static function onIrisClick(param1:MouseEvent) : void
      {
         iris_mc.removeEventListener(MouseEvent.CLICK,onIrisClick);
         iris_mc.visible = false;
         irisFall_mc.visible = true;
         irisFall_mc.addEventListener(Event.ENTER_FRAME,onIrisFallEnterFrame);
         irisFall_mc.gotoAndPlay(2);
         justin_mc.gotoAndPlay(2);
      }
      
      private static function onIrisFallEnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         irisFall_mc.removeEventListener(Event.ENTER_FRAME,onIrisFallEnterFrame);
         NpcDialog.show(NPC.JUSTIN,["我们要找到迪恩！如果没有他的出现恐怕我也不会变强吧……这里瘴气太严重！先离开！"],["是的！站长！（火速撤离，去船长室）"],[function():void
         {
            TasksManager.complete(TaskController_609.TASK_ID,1,function(param1:Boolean):void
            {
               MapManager.changeMap(4);
            });
         }]);
      }
      
      public static function showDialog_dien(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var randomNum:uint = Math.random() * dialog_arr.length;
         var newArr:Array = dialog_arr[randomNum].toString().split("@");
         var str1:String = String(newArr[0]);
         var str2:String = String(newArr[1]);
         NpcDialog.show(NPC.DIEN,[str1],[str2],[function():void
         {
         }]);
      }
      
      public static function destroy() : void
      {
         TimerUtil.clearGTimeout(effectTimer);
         if(diEn_mc)
         {
            diEn_mc.removeEventListener(MouseEvent.CLICK,showDialog_dien);
         }
         if(jucks_mc)
         {
            jucks_mc.removeEventListener(MouseEvent.CLICK,onJucksFightClick);
            jucks_mc.buttonMode = false;
         }
         if(bigMC_mc)
         {
            bigMC_mc.removeEventListener(Event.ENTER_FRAME,onBigMCEnterFrame);
         }
         if(hole_mc)
         {
            hole_mc.removeEventListener(Event.ENTER_FRAME,onHoleAnimEnterFrameHandler);
         }
         hasStone = false;
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
         removeGroupEvent();
         removeTaskResource_443();
         attackNum = 0;
      }
   }
}
