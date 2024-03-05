package com.robot.app.homeToolBarPanel
{
   import com.robot.app.control.GreenHouseController;
   import com.robot.app.info.greenHouse.GreenHouseUserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HomeToolBarPlantPanel extends Sprite
   {
       
      
      private var _panel:MovieClip;
      
      public function HomeToolBarPlantPanel()
      {
         super();
         this._panel = UIManager.getMovieClip("ui_Home_toolBar_plant");
         ToolTipManager.add(this._panel["levelBg"],"种植等级");
         ToolTipManager.add(this._panel["energyBg"],"肥料转化器可以为你转化肥料");
         ToolTipManager.add(this._panel["waterBg"],"蓄水池可以自动为你蓄满水份");
         GreenHouseController.getInstance().addEventListener(GreenHouseController.USER_UPDATE,this.updateUserPlantInfo);
      }
      
      public function show() : void
      {
         addChild(this._panel);
         GreenHouseController.getInstance().getUserInfo(MainManager.actorID);
      }
      
      private function updateUserPlantInfo(param1:DynamicEvent) : void
      {
         var _loc2_:GreenHouseUserInfo = param1.paramObject as GreenHouseUserInfo;
         this._panel["level"].text = _loc2_.level.toString();
         this._panel["exp"].text = _loc2_.exp.toString();
         this._panel["expTotal"].text = "/" + _loc2_.expTotal.toString();
         this._panel["energy"].text = _loc2_.energy.toString();
         this._panel["water"].text = _loc2_.water.toString();
         this._panel["waterTotal"].text = "/" + (300 + _loc2_.newLand * 100).toString();
         this._panel["expBar"].gotoAndStop(int(_loc2_.exp * 100 / _loc2_.expTotal) + 1);
         this._panel["energyBar"].gotoAndStop(int(_loc2_.energy / 5) + 1);
         this._panel["waterBar"].gotoAndStop(int(_loc2_.water / (3 + _loc2_.newLand)) + 1);
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this._panel);
      }
      
      public function destroy() : void
      {
         this.hide();
         ToolTipManager.remove(this._panel["levelBg"]);
         ToolTipManager.remove(this._panel["energyBg"]);
         ToolTipManager.remove(this._panel["waterBg"]);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.USER_UPDATE,this.updateUserPlantInfo);
         this._panel = null;
      }
   }
}
