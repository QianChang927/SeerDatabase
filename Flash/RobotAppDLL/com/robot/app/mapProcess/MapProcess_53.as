package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.active.ActivePet;
   import com.robot.app.task.taskscollection.Task814;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_53 extends BaseMapProcess
   {
      
      private static var isFightPet:Boolean = false;
       
      
      private var activePet:ActivePet;
      
      private var stoneMC:MovieClip;
      
      private var oldP:Point;
      
      private var rung:MovieClip;
      
      private var boss:MovieClip;
      
      private var bossMC:MovieClip;
      
      private var rungClickedCnt:uint = 1;
      
      public function MapProcess_53()
      {
         super();
      }
      
      override protected function init() : void
      {
         if(!isFightPet)
         {
            this.activePet = new ActivePet(178);
         }
         this.stoneMC = conLevel["stoneMC"];
         this.stoneMC.buttonMode = true;
         this.oldP = new Point(this.stoneMC.x,this.stoneMC.y);
         this.stoneMC.addEventListener(MouseEvent.CLICK,this.clickStone);
         this.initTask_58();
         SocketConnection.send(1022,86052881);
         MapListenerManager.add(depthLevel["npc2"],function():void
         {
            NpcDialog.show(NPC.LANMAOQIU,["融合一族正在寻找瑞德尔的下落，据说它被阿克妮丝冰封在千年冰川之中，想要击碎千年冰川可不是件容易的事情！"],["看来，我来的正是时候啊！"],[function():void
            {
               NpcDialog.show(NPC.ZIMAOQIU,[MainManager.actorInfo.formatNick + "，你记得在" + Task814.TIME_STR + "，前往斯诺秘洞，拯救被困千年冰川中的融合界新宠哦！"],["恩恩，我一定会来的！"],[function():void
               {
               }]);
            }]);
         });
         Task814.throwDialog();
         Task814.initFor53(this);
      }
      
      private function clickStone(param1:MouseEvent) : void
      {
         param1.stopPropagation();
         this.stoneMC.startDrag(true);
         this.stoneMC.mouseEnabled = false;
         MainManager.getStage().addEventListener(MouseEvent.CLICK,this.dropStone);
      }
      
      private function dropStone(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = null;
         var _loc4_:uint = 0;
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,this.dropStone);
         this.stoneMC.stopDrag();
         var _loc3_:Boolean = false;
         _loc4_ = 0;
         while(_loc4_ < 2)
         {
            _loc2_ = conLevel["stoneHit_" + _loc4_];
            if(_loc2_.hitTestObject(this.stoneMC))
            {
               _loc3_ = true;
               break;
            }
            _loc4_++;
         }
         if(_loc3_)
         {
            if(_loc4_ == 0)
            {
               if(this.activePet)
               {
                  this.activePet.fillLeft();
               }
            }
            else if(this.activePet)
            {
               this.activePet.fillRight();
            }
            this.stoneMC.rotation = 90;
            this.stoneMC.x = this.stoneMC.y = 0;
            _loc2_.addChild(this.stoneMC);
         }
         else
         {
            this.stoneMC.rotation = 0;
            this.stoneMC.x = this.oldP.x;
            this.stoneMC.y = this.oldP.y;
            this.stoneMC.mouseEnabled = true;
         }
      }
      
      override public function destroy() : void
      {
         Task814.destroy();
         this.activePet.destroy();
         this.activePet = null;
         this.rung = null;
         this.boss = null;
         this.bossMC = null;
      }
      
      private function initTask_58() : void
      {
         this.rung = conLevel["rung"];
         this.bossMC = conLevel["bossMC"];
         this.bossMC.gotoAndStop(1);
         this.bossMC.visible = false;
         this.boss = conLevel["boss"];
         this.bossMC.visible = true;
         this.rung.buttonMode = true;
         this.rung.addEventListener(MouseEvent.CLICK,this.onClickRung);
      }
      
      private function onClickRung(param1:MouseEvent) : void
      {
         ++this.rungClickedCnt;
         this.bossMC.gotoAndStop(this.rungClickedCnt);
         if(this.rungClickedCnt == 4)
         {
            this.boss.buttonMode = true;
            this.boss.addEventListener(MouseEvent.CLICK,this.onClickBoss);
         }
      }
      
      private function onClickBoss(param1:MouseEvent) : void
      {
         if(MapManager.currentMap.id == 53)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightManager.fightWithBoss("魔狮迪露",1);
         }
      }
   }
}
