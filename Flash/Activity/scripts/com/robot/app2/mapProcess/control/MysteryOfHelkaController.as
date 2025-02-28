package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MysteryOfHelkaController
   {
      
      private static var map:BaseMapProcess;
      
      private static var _step:int;
       
      
      public function MysteryOfHelkaController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         map = param1;
         (map.conLevel["step1"]["helka"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickHelKa);
         (map.conLevel["step2"]["monster_1"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickAiji);
         (map.conLevel["step2"]["monster_0"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickSipai);
         (map.conLevel["step1"]["helka"] as MovieClip).buttonMode = true;
         (map.conLevel["step2"]["monster_1"] as MovieClip).buttonMode = true;
         (map.conLevel["step2"]["monster_0"] as MovieClip).buttonMode = true;
         start();
      }
      
      public static function start() : void
      {
         map.conLevel["step2"].visible = false;
         map.conLevel["step1"].visible = false;
         KTool.getMultiValue([1913],function(param1:Array):void
         {
            var arr:Array = param1;
            _step = arr[0];
            switch(_step)
            {
               case 0:
                  playAnimation(1,function():void
                  {
                     map.conLevel["step1"].visible = true;
                     map.conLevel["step2"].visible = false;
                  });
                  break;
               case 1:
                  KTool.getBitSet([8175,8176],function(param1:Array):void
                  {
                     var i:int = 0;
                     var arr:Array = param1;
                     if(arr.indexOf(1) >= 0)
                     {
                        map.conLevel["step1"].visible = false;
                        map.conLevel["step2"].visible = true;
                        i = 0;
                        while(i < 2)
                        {
                           if(arr[i])
                           {
                              map.conLevel["step2"]["flag_" + i].visible = false;
                              map.conLevel["step2"]["monster_" + i].mouseChildren = false;
                              map.conLevel["step2"]["monster_" + i].mouseEnabled = false;
                              map.conLevel["step2"]["monster_" + i].buttonMode = false;
                           }
                           i++;
                        }
                     }
                     else
                     {
                        playAnimation(2,function():void
                        {
                           map.conLevel["step1"].visible = false;
                           map.conLevel["step2"].visible = true;
                        });
                     }
                  });
                  break;
               case 2:
                  playAnimation(3,function():void
                  {
                     ModuleManager.showAppModule("MysteryOfHelkaMainPanel");
                  });
            }
         });
      }
      
      private static function playAnimation(param1:int, param2:Function) : void
      {
         var index:int = param1;
         var func:Function = param2;
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         ResourceManager.getResource(ClientConfig.getMapAnimate("MysteryOfHelkaAnamate"),function(param1:MovieClip):void
         {
            var taskMc:MovieClip = param1;
            LevelManager.topLevel.addChild(taskMc);
            AnimateManager.playMcAnimate(taskMc,index,"mc",function():void
            {
               KTool.showMapAllPlayerAndMonster(true);
               NpcController.npcVisible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               DisplayUtil.removeForParent(taskMc);
               func();
            });
         });
      }
      
      private static function onClickHelKa(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("MysteryOfHelkaQesPanel");
      }
      
      private static function onClickSipai(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SIPAI,["帮助赫尔卡击败斯派，阻止武器发射！"],["挑战斯派！","一会再说！"],[function():void
         {
            fightBoss(4319,"斯派");
         }]);
      }
      
      private static function onClickAiji(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.AIJI,["帮助赫尔卡击败艾吉，阻止武器发射！"],["挑战艾吉！","一会再说！"],[function():void
         {
            fightBoss(4320,"艾吉");
         }]);
      }
      
      public static function fightBoss(param1:int, param2:String) : void
      {
         var bossid:int = param1;
         var bossname:String = param2;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(FightManager.currentBossRegion == bossid)
            {
               if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
               }
            }
         });
         FightManager.fightNoMapBoss(bossname,bossid);
      }
      
      public static function destroy() : void
      {
         (map.conLevel["step1"]["helka"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClickHelKa);
         (map.conLevel["step2"]["monster_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClickAiji);
         (map.conLevel["step2"]["monster_0"] as MovieClip).removeEventListener(MouseEvent.CLICK,onClickSipai);
         map = null;
      }
   }
}
