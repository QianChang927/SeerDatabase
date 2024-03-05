package com.robot.app.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LoadSmallTVController
   {
      
      private static var _widget:MovieClip;
      
      private static var _isLoading:Boolean = false;
       
      
      public function LoadSmallTVController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:Boolean = _loc1_.getFullYear() == 2015 && _loc1_.month == 1 && _loc1_.date >= 17 && _loc1_.date <= 26;
         if(!_loc2_)
         {
            return;
         }
         SystemTimerManager.addTickFun(update);
      }
      
      private static function update() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:Boolean = _loc1_.hours == 14 && _loc1_.minutes >= 30 || _loc1_.hours == 18 && _loc1_.minutes < 30;
         var _loc3_:Boolean = _loc1_.hours == 14 && _loc1_.minutes >= 25 && _loc1_.minutes < 30 || _loc1_.hours == 17 && _loc1_.minutes >= 55;
         if((_loc2_ || _loc3_) && MapManager.currentMap != null && MapManager.currentMap.id != 1062)
         {
            loadWidget(_loc2_);
         }
         else
         {
            hideWidget();
         }
      }
      
      private static function loadWidget(param1:Boolean) : void
      {
         var onTime:Boolean = param1;
         if(!_widget)
         {
            if(_isLoading)
            {
               return;
            }
            _isLoading = true;
            ResourceManager.getResource(ClientConfig.getAppRes("nianFight_tv"),function(param1:MovieClip):void
            {
               _widget = param1;
               MapNamePanel.ChildMc = _widget;
               _widget["btnGo"].addEventListener(MouseEvent.CLICK,onGo);
               MapNamePanel.autoOpenOrClose(true,1);
               if(onTime)
               {
                  _widget["mc"].gotoAndStop(1);
               }
               else
               {
                  _widget["mc"].gotoAndStop(2);
               }
            });
         }
         else if(onTime)
         {
            _widget["mc"].gotoAndStop(1);
         }
         else
         {
            _widget["mc"].gotoAndStop(2);
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("全民打年兽！福袋天天领！","点击小电视","2016运营活动");
         ModuleManager.showModule(ClientConfig.getAppModule("NianFightPanel"));
      }
      
      private static function hideWidget() : void
      {
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget["btnGo"].removeEventListener(MouseEvent.CLICK,onGo);
            ToolTipManager.remove(_widget);
            MapNamePanel.autoOpenOrClose(false);
            DisplayUtil.removeForParent(_widget);
            _widget = null;
            _isLoading = false;
         }
      }
   }
}
