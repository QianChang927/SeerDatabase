package com.robot.app.mapProcess
{
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.group.manager.GroupFightInviteManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class MapProcess_347 extends BaseMapProcess
   {
       
      
      private var _monsterMC:SimpleButton;
      
      private var _bogeMC:MovieClip;
      
      public function MapProcess_347()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._monsterMC = conLevel["mosterMc"];
         this._monsterMC.addEventListener(MouseEvent.CLICK,this.onHealClick);
         this._bogeMC = conLevel["bogeMC"];
         this._bogeMC.buttonMode = true;
         this._bogeMC.addEventListener(MouseEvent.CLICK,this.onFightWithBoge);
      }
      
      override public function destroy() : void
      {
         this._monsterMC.removeEventListener(MouseEvent.CLICK,this.onHealClick);
         this._bogeMC.removeEventListener(MouseEvent.CLICK,this.onFightWithBoge);
      }
      
      private function onHealClick(param1:MouseEvent) : void
      {
         FightPetBagController.show(true);
      }
      
      private function onFightWithBoge(param1:MouseEvent) : void
      {
         GroupFightInviteManager.fightWithBoss("波戈");
      }
   }
}
