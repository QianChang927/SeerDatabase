package com.robot.app2.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class ThunderGodAblityLevelUpController
   {
      
      private static var _widget:MovieClip;
       
      
      public function ThunderGodAblityLevelUpController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:CronTimeVo = new CronTimeVo("*","*","2-10","9","*","2015");
         if(_loc1_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
            onSystemTime();
         }
         setTimeout(getbit,1400);
      }
      
      private static function getbit() : void
      {
         KTool.getBitSet([186,188],function(param1:Array):void
         {
            var num:int = 0;
            var values:Array = param1;
            num = 0;
            if(values[0] > 0)
            {
               if(SystemTimerManager.time > SystemTimerManager.getTimeByDate(2015,9,6,0))
               {
                  ItemManager.updateItems([1706231],function():void
                  {
                     num = ItemManager.getNumByID(1706231);
                     SocketConnection.sendWithCallback(42188,function(param1:SocketEvent):void
                     {
                     },1,num,0);
                  });
               }
            }
            else if(values[1] > 0)
            {
               if(SystemTimerManager.time > SystemTimerManager.getTimeByDate(2015,9,11,0))
               {
                  ItemManager.updateItems([1706231],function():void
                  {
                     num = ItemManager.getNumByID(1706231);
                     SocketConnection.sendWithCallback(42188,function(param1:SocketEvent):void
                     {
                     },1,num,0);
                  });
               }
            }
         });
      }
      
      private static function onSystemTime(param1:SocketEvent = null) : void
      {
         var _loc2_:Date = null;
         if(MapManager.currentMap)
         {
            _loc2_ = SystemTimerManager.sysBJDate;
            if(_loc2_.hours >= 14 && _loc2_.hours < 16 || _loc2_.hours >= 15 && _loc2_.hours < 21)
            {
               if(_widget == null)
               {
                  loadWidget();
               }
               else
               {
                  _widget.visible = true;
                  if(MapManager.currentMap.id == 10944)
                  {
                     _widget.visible = false;
                  }
               }
            }
            else
            {
               destroyWidget();
            }
         }
      }
      
      private static function loadWidget() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("ThunderGodAblityLevelUpUI"),function(param1:MovieClip):void
         {
            _widget = param1;
            DisplayUtil.align(_widget,null,AlignType.TOP_CENTER);
            _widget.y -= 3;
            _widget.buttonMode = true;
            _widget.mouseChildren = false;
            _widget.addEventListener(MouseEvent.CLICK,onGo);
            LevelManager.iconLevel.addChild(_widget);
            _widget.visible = true;
            MapNamePanel.hide();
         },"ThunderGodAblityLevelUp_UI");
      }
      
      private static function destroyWidget() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget.removeEventListener(MouseEvent.CLICK,onGo);
            MapNamePanel.show();
            DisplayUtil.removeForParent(_widget);
            _widget = null;
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("LeiyisThunderCookBookPanel");
      }
   }
}
