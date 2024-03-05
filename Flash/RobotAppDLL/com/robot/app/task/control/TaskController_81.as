package com.robot.app.task.control
{
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public class TaskController_81
   {
      
      public static const TASK_ID:uint = 81;
      
      private static var dh_mc:MovieClip;
      
      private static var hua_btn:SimpleButton;
      
      public static var pet_btn:SimpleButton;
      
      private static var addB:Boolean = false;
      
      public static var panel1:AppModel;
      
      public static var panel:AppModel;
       
      
      public function TaskController_81()
      {
         super();
      }
      
      public static function initMc(param1:MovieClip, param2:SimpleButton, param3:SimpleButton) : void
      {
         dh_mc = param1;
         hua_btn = param2;
         pet_btn = param3;
      }
      
      public static function addLisPetF() : void
      {
         if(!addB)
         {
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,onCloseFight);
            addB = true;
         }
      }
      
      private static function onCloseFight(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj["data"];
         if(_loc2_.winnerID == MainManager.actorInfo.userID)
         {
            speek2();
            FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,onCloseFight);
         }
      }
      
      public static function playCartoon0() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task81donghua"),function():void
         {
            NpcTipDialog.show("是谁？是谁？刚才是谁蒙住了我的眼睛？(⊙o⊙)？",function():void
            {
               dh_mc.gotoAndPlay(2);
               dh_mc.addFrameScript(40,endDh0);
            },NpcTipDialog.SEER,0,null,null,false);
         });
      }
      
      private static function endDh0() : void
      {
         dh_mc.addFrameScript(40,null);
         dh_mc.gotoAndStop(40);
         TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
         {
            if(param1)
            {
               showPanel();
               hua_btn.visible = true;
            }
         });
      }
      
      public static function speek0() : void
      {
         NpcTipDialog.show("……&*（&#……#@——￥####@￥@%",function():void
         {
            NpcTipDialog.show("它这说的是什么？它想表达什么呢……我的天！这可把我给难住了……",function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task81donghua1"),speek1);
            },NpcTipDialog.SEER,0,null,null,false);
         },NpcTipDialog.NEWPET,0,null,null,false);
      }
      
      private static function speek1() : void
      {
         NpcTipDialog.show("你这说的是别的精灵在追赶你？他们还欺负你？可恶啊！！我不能袖手旁观！(╰_╯)#",function():void
         {
            TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
            {
               if(param1)
               {
                  showPanel();
                  addLisPetF();
               }
            });
         },NpcTipDialog.SEER,0,null,null,false);
      }
      
      public static function speek2() : void
      {
         NpcTipDialog.show("哼！叫你以后敢以大欺小！好了，小家伙，你不用怕啦，那个家伙以后应该不敢再欺负你了！",function():void
         {
            TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
            {
               if(param1)
               {
                  showPanel();
                  pet_btn.visible = true;
                  dh_mc.gotoAndStop(81);
               }
            });
         },NpcTipDialog.SEER,0,null,null,false);
      }
      
      public static function speek3() : void
      {
         NpcTipDialog.show("…！*##%#…@@@…*…#@@###o(≧v≦)",function():void
         {
            NpcTipDialog.show("它这说的又是什么呀……这可怎么办是好？吖！对了！前面博士不是说有一个什么什么故事？难道和这个事情有关？快用通讯器询问一下博士吧！",function():void
            {
               showPanel1();
            },NpcTipDialog.SEER,0,null,null,false);
         },NpcTipDialog.NEWPET,0,null,null,false);
      }
      
      public static function speek4() : void
      {
         NpcTipDialog.show("怪不得这个家伙让我去打败其他精灵了！原来还有这么一个说法……咦？遇到你，打败了比你厉害的精灵！难道我就是那个宿命的追随者？米隆决定就是你了！我们一定会成为朋友的！",function():void
         {
            TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
            {
               if(param1)
               {
                  dh_mc.gotoAndStop(1);
                  pet_btn.visible = false;
               }
            });
         },NpcTipDialog.SEER,0,null,null,false);
      }
      
      public static function showPanel1() : void
      {
         if(panel1)
         {
            panel1.destroy();
            panel1 = null;
         }
         if(panel1 == null)
         {
            panel1 = new AppModel(ClientConfig.getTaskModule("TaskPanel0_81"),"正在打开任务信息");
            panel1.setup();
            panel1.show();
         }
         else
         {
            panel1.show();
         }
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_81"),"正在打开任务信息");
            panel.setup();
            panel.show();
         }
         else
         {
            panel.show();
         }
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.DOCTOR,["我要和你说什么来着……别吵！让我好好想一下……哦！哦！哦对了！你前面是来问我关于0xff0000尼古尔星0xffffff上出现精灵踪迹的事情吗？我正想派你去那里调查一下，你意下如何？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.DOCTOR,["在精灵档案中也记载着一个关于它的故事……不过我们无从验证！不说啦……不说啦，我要继续开始研究精灵了！你快去那调查下吧！"],null,null,false,function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     showPanel();
                  }
               });
            });
         });
      }
      
      public static function startPro() : void
      {
      }
   }
}
