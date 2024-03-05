package com.robot.app.mapProcess
{
   import com.robot.app.control.ASuoKAController;
   import com.robot.app.mapProcess.active.RoutePetActive;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_411 extends BaseMapProcess
   {
       
      
      private var _routePet:RoutePetActive;
      
      private var _rock:MovieClip;
      
      public function MapProcess_411()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.initPetAndRock();
         ASuoKAController.getInstance().start();
      }
      
      protected function initPetAndRock() : void
      {
         this._routePet = new RoutePetActive(463);
         this._routePet.show();
         this._rock = conLevel["rock"];
         ToolTipManager.add(this._rock,"巨型陨石");
         this._rock.buttonMode = true;
         this._rock.addEventListener(MouseEvent.CLICK,this.onRockClick);
      }
      
      private function onRockClick(param1:MouseEvent) : void
      {
         MapManager.changeMap(415);
      }
      
      override public function destroy() : void
      {
         this._routePet.destroy();
         ASuoKAController.getInstance().removeEvents();
         ToolTipManager.remove(this._rock);
         this._rock.removeEventListener(MouseEvent.CLICK,this.onRockClick);
         this._rock = null;
      }
   }
}
