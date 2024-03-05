package com.robot.app.mapProcess.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SearchZhugeliangJinnangPanelControl
   {
      
      private static var _allTopMaps:Array = [30,30,25,40,82,82,325,411,441,441,683,924,451,451,29,29,775,775,988,988];
      
      private static var _allMaps:Array = [781,778,27,43,83,88,326,415,693,682,687,670,434,455,710,715,784,785,990,993];
      
      private static var _dailys:Array = [13513,13514,13518];
      
      private static var _dateArr:Array = [new CronTimeVo("*","0-12","30","9","*","2014"),new CronTimeVo("*","14-23","30","9","*","2014"),new CronTimeVo("*","0-12","1-7","10","*","2014"),new CronTimeVo("*","14-23","1-7","10","*","2014"),new CronTimeVo("*","*","8-9","10","*","2014")];
      
      private static var _mcTV:MovieClip;
       
      
      public function SearchZhugeliangJinnangPanelControl()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(SystemTimerManager.isActive(_dateArr))
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         }
      }
      
      private static function loadSWF() : void
      {
         KTool.getMultiValue(_dailys,function(param1:Array):void
         {
            var mapId:uint;
            var curId:uint;
            var position:uint = 0;
            var bit2:uint = 0;
            var arr:Array = param1;
            var val2:uint = uint(arr[1]);
            var bits:Array = [];
            var i:uint = 0;
            while(i < 20)
            {
               bit2 = KTool.getBit(val2,i + 1);
               if(bit2 > 0)
               {
                  bits.push(i);
               }
               i++;
            }
            mapId = uint(_allMaps[bits[0]]);
            curId = uint(MapManager.currentMap.id);
            if(curId == mapId)
            {
               ResourceManager.getResource(ClientConfig.getResPath("module/active/jinnang.swf"),function(param1:DisplayObject):void
               {
                  var mc:MovieClip = null;
                  var o:DisplayObject = param1;
                  mc = o as MovieClip;
                  mc.buttonMode = true;
                  LevelManager.mapLevel.addChild(mc);
                  mc.x = 500;
                  mc.y = 250;
                  mc.gotoAndStop(1);
                  mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                     ModuleManager.showModule(ClientConfig.getAppModule("SearchZhugeliangJinnangXiaoPanel"),"正在打开...",null,1);
                     DisplayUtil.removeForParent(mc);
                     mc = null;
                  });
               },"zhugejinnang");
            }
         });
      }
      
      private static function loadTVSWF() : void
      {
         if(SystemTimerManager.isActive(_dateArr))
         {
            ResourceManager.getResource(ClientConfig.getAppRes("zgjnTVTips"),function(param1:DisplayObject):void
            {
               var str:String;
               var mc:MovieClip = null;
               var o:DisplayObject = param1;
               mc = o as MovieClip;
               mc.buttonMode = true;
               MapNamePanel.ChildMc = mc;
               mc.gotoAndStop(2);
               mc.goBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
               {
                  mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                  ModuleManager.showModule(ClientConfig.getAppModule("SearchZhugeliangJinnangPanel"),"正在打开...",null,1);
                  DisplayUtil.removeForParent(mc);
                  mc = null;
               });
               str = "小锦寻找诸葛亮锦囊火热进行中!";
               MapNamePanel.autoOpenOrClose(true);
               ToolTipManager.add(mc,str);
            });
         }
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         var _loc2_:String = null;
         if(!SystemTimerManager.isActive(_dateArr))
         {
            removeTVListener();
         }
         if(Boolean(_mcTV) && Boolean(DisplayUtil.hasParent(_mcTV)))
         {
            _loc2_ = "小锦寻找诸葛亮锦囊火热进行中!";
            MapNamePanel.autoOpenOrClose(true);
            ToolTipManager.add(_mcTV,_loc2_);
         }
         else
         {
            loadTV();
         }
      }
      
      private static function loadTV() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("zgjnTVTips"),function(param1:DisplayObject):void
         {
            _mcTV = param1 as MovieClip;
            _mcTV.buttonMode = true;
            _mcTV.gotoAndStop(2);
            var _loc2_:String = "小锦寻找诸葛亮锦囊火热进行中!";
            MapNamePanel.ChildMc = _mcTV;
            MapNamePanel.autoOpenOrClose(true);
            ToolTipManager.add(_mcTV,_loc2_);
            _mcTV.goBtn.addEventListener(MouseEvent.CLICK,goBtnClickHandler);
         });
      }
      
      private static function removeTVListener() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         _mcTV.goBtn.removeEventListener(MouseEvent.CLICK,goBtnClickHandler);
         DisplayUtil.removeForParent(_mcTV);
         _mcTV = null;
      }
      
      private static function goBtnClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SearchZhugeliangJinnangPanel"),"正在打开...",null,1);
      }
   }
}
