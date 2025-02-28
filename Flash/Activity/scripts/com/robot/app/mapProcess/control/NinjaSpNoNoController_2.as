package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class NinjaSpNoNoController_2
   {
      
      public static var index:int;
      
      private static var map:BaseMapProcess;
      
      private static var dailog:Array;
      
      private static var functions:Array;
      
      private static var talkMC:MovieClip;
      
      private static var stoneDoorMC:MovieClip;
      
      private static var bossBtn:SimpleButton;
      
      private static var isStory:Boolean;
      
      private static var intro:AppModel;
      
      private static var train:AppModel;
      
      public static var frame:int;
       
      
      public function NinjaSpNoNoController_2()
      {
         super();
      }
      
      public static function init_480(param1:BaseMapProcess) : void
      {
         var m:BaseMapProcess = param1;
         map = m;
         if(!BufferRecordManager.getState(MainManager.actorInfo,137))
         {
            map.conLevel["door_0"].mouseEnabled = false;
            map.conLevel["door_0"].mouseChildren = false;
            if(!BufferRecordManager.getState(MainManager.actorInfo,108))
            {
               NpcDialog.show(NPC.NINJA_NPC,["如今，你也大致对忍者精灵有了初步的认识了吧。"],["是的，略知一二。","不是很清楚，我是刚来的。"],[function():void
               {
                  map.conLevel["yesMc"].visible = false;
                  map.conLevel["arrowMc"].visible = false;
                  map.animatorLevel["aniMc01"].visible = false;
                  start();
               },function():void
               {
                  NpcDialog.show(NPC.NINJA_NPC,["好吧，那让我们时光倒流。"],null,null,false,function():void
                  {
                     NinjaSpNoNoController.instance.initMap480Main(m,true);
                  });
               }]);
            }
            else
            {
               map.conLevel["yesMc"].visible = false;
               map.conLevel["arrowMc"].visible = false;
               map.animatorLevel["aniMc01"].visible = false;
               start();
            }
         }
         else
         {
            NinjaSpNoNoController.instance.initMap480Main(m);
         }
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.NINJA_NPC,["最近我一直会闪过【阿尔卡达】的影像，看来他的意念已经开始影响到我，武道会估计也马上就要打响了！"],["哈哈，让我来打倒他吧！"],[function():void
         {
            NpcDialog.show(NPC.NINJA_NPC,["好！虽然你有这个勇气，但是看来你的感知力还并不太灵敏。难道没发觉这里有什么地方不太对劲么？"],["（东看看，西看看）哇！老鼠！看来最近这里好久没打扫了！"],[function():void
            {
               NpcDialog.show(NPC.NINJA_NPC,["你........................"],["难道还有别的玄机?"],[function():void
               {
                  NpcDialog.show(NPC.NINJA_NPC,["宇宙之大，还有更多的东西需要探索呢！小赛尔！让我告诉你这里的秘密吧！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(map.conLevel["openDoor"],0,"",function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,137,true,function():void
                        {
                           MapManager.changeMap(495);
                        });
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      public static function init_495(param1:BaseMapProcess, param2:Boolean) : void
      {
         map = param1;
         isStory = param2;
         ToolBarController.showOrHideAllUser(false);
         ToolTipManager.add(map.conLevel["mingwen"],"铭文");
         map.conLevel["mingwen"].buttonMode = true;
         map.conLevel["mingwen"].addEventListener(MouseEvent.CLICK,onIntroClick);
         ToolTipManager.add(map.conLevel["dao"],"忍刀");
         map.conLevel["dao"].buttonMode = true;
         map.conLevel["dao"].addEventListener(MouseEvent.CLICK,onRendaoClick);
         ToolTipManager.add(map.conLevel["gou"],"手甲钩");
         map.conLevel["gou"].buttonMode = true;
         map.conLevel["gou"].addEventListener(MouseEvent.CLICK,onShouJiaGouClick);
         ToolTipManager.add(map.conLevel["jian"],"手里剑");
         map.conLevel["jian"].buttonMode = true;
         map.conLevel["jian"].addEventListener(MouseEvent.CLICK,onShouLiJianClick);
         map.animatorLevel["bg"]["dao"].visible = true;
         map.animatorLevel["bg"]["gou"].visible = true;
         map.animatorLevel["bg"]["jian"].visible = true;
         map.animatorLevel["bg"]["dao"].visible = true;
         map.conLevel["dao"].gotoAndStop(map.conLevel["dao"].totalFrames);
         map.animatorLevel["bg"]["gou"].visible = true;
         map.conLevel["gou"].gotoAndStop(map.conLevel["gou"].totalFrames);
         map.animatorLevel["bg"]["jian"].visible = true;
         map.conLevel["jian"].gotoAndStop(map.conLevel["jian"].totalFrames);
         sptStory();
      }
      
      private static function sptStory() : void
      {
         /*
          * Decompilation error
          * Timeout (1 minute) was reached
          * Instruction count: 55
          */
         throw new flash.errors.IllegalOperationError("Not decompiled due to timeout");
      }
      
      private static function challenge() : void
      {
         NpcDialog.show(NPC.SEER,["看来结界挺坚固的，不打败你们这堆机器人是出不去了，那就放马过来吧！"],["挑战斯普林特！","下次再说！"],[function():void
         {
            fightWithBoss();
         }]);
      }
      
      private static function onMouseBoss(param1:MouseEvent) : void
      {
         challenge();
      }
      
      private static function fightWithBoss() : void
      {
         FightManager.fightWithBoss("斯普林特",1);
      }
      
      private static function onIntroClick(param1:MouseEvent) : void
      {
         frame = int(param1.target.name.split("_")[1]);
         if(!intro)
         {
            intro = new AppModel(ClientConfig.getAppModule("NinjaSpIntroPanel"),"正在加载面板");
            intro.setup();
         }
         intro.show();
      }
      
      private static function onRendaoClick(param1:MouseEvent) : void
      {
         index = 0;
         initPanel();
      }
      
      private static function onShouJiaGouClick(param1:MouseEvent) : void
      {
         index = 1;
         initPanel();
      }
      
      private static function onShouLiJianClick(param1:MouseEvent) : void
      {
         index = 2;
         initPanel();
      }
      
      private static function initPanel() : void
      {
         if(!train)
         {
            train = new AppModel(ClientConfig.getAppModule("NinjaSpTrainPanel"),"正在加载面板");
            train.setup();
         }
         train.show();
      }
      
      public static function destroy() : void
      {
         ToolBarController.showOrHideAllUser(true);
         if(!map)
         {
            return;
         }
         if(map.conLevel["mingwen"])
         {
            ToolTipManager.remove(map.conLevel["mingwen"]);
            map.conLevel["mingwen"].removeEventListener(MouseEvent.CLICK,onIntroClick);
         }
         if(map.conLevel["dao"])
         {
            ToolTipManager.remove(map.conLevel["dao"]);
            map.conLevel["dao"].removeEventListener(MouseEvent.CLICK,onRendaoClick);
         }
         if(map.conLevel["gou"])
         {
            ToolTipManager.remove(map.conLevel["gou"]);
            map.conLevel["gou"].removeEventListener(MouseEvent.CLICK,onShouJiaGouClick);
         }
         if(map.conLevel["jian"])
         {
            ToolTipManager.remove(map.conLevel["jian"]);
            map.conLevel["jian"].removeEventListener(MouseEvent.CLICK,onShouLiJianClick);
         }
         if(bossBtn)
         {
            bossBtn.removeEventListener(MouseEvent.CLICK,onMouseBoss);
            bossBtn = null;
         }
      }
   }
}
