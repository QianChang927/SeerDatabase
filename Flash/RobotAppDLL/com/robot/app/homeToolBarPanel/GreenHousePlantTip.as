package com.robot.app.homeToolBarPanel
{
   import com.robot.app.info.greenHouse.GreenHousePlantInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.SpaceSeedsXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class GreenHousePlantTip
   {
      
      private static var _tip:MovieClip;
       
      
      public function GreenHousePlantTip()
      {
         super();
      }
      
      public static function show(param1:GreenHousePlantInfo) : void
      {
         var _loc2_:uint = 0;
         if(_tip == null)
         {
            _tip = UIManager.getMovieClip("ui_Home_plant_tip");
         }
         _tip["nam"].text = ItemXMLInfo.getName(param1.id);
         _tip["energy"].gotoAndStop(param1.energy + 1);
         _tip["energyTxt"].text = param1.energy.toString() + "/100";
         _tip["water"].gotoAndStop(param1.water + 1);
         _tip["waterTxt"].text = param1.water.toString() + "/100";
         _tip["per"].gotoAndStop(param1.growPercent + 1);
         _tip["perTxt"].text = param1.growPercent.toString() + "/100";
         if(param1.energy == 0 || param1.water == 0)
         {
            _tip["time"].text = "停止生长";
         }
         else
         {
            _loc2_ = uint(SpaceSeedsXMLInfo.getMatureTime(param1.id) * (100 - param1.growPercent) * 0.01 * 60);
            if(_loc2_ < 60)
            {
               if(_loc2_ == 0)
               {
                  _tip["time"].text = "已成熟";
               }
               else if(_loc2_ < 10)
               {
                  _tip["time"].text = "<10分钟";
               }
               else
               {
                  _tip["time"].text = _loc2_.toString() + "分钟";
               }
            }
            else
            {
               _tip["time"].text = uint(_loc2_ / 60).toString() + "小时";
            }
         }
         _tip.x = LevelManager.stage.mouseX + 40;
         _tip.y = LevelManager.root.mouseY;
         LevelManager.stage.addChild(_tip);
      }
      
      public static function hide() : void
      {
         if(_tip != null)
         {
            DisplayUtil.removeForParent(_tip);
            _tip = null;
         }
      }
      
      public static function get tip() : MovieClip
      {
         return _tip;
      }
   }
}
