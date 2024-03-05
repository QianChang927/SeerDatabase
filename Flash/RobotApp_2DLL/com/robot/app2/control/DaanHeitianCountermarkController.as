package com.robot.app2.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DaanHeitianCountermarkController
   {
      
      public static var lefttime:int;
      
      public static var isInactivity:Boolean;
      
      private static var _instance:com.robot.app2.control.DaanHeitianCountermarkController;
      
      public static var showidx:Array = [0,1,2,3,4];
       
      
      private var ui:MovieClip;
      
      private var checktime:int;
      
      private var type:int;
      
      public function DaanHeitianCountermarkController()
      {
         super();
         this.timerHandle();
         SystemTimerManager.addTickFun(this.timerHandle);
      }
      
      public static function get instance() : com.robot.app2.control.DaanHeitianCountermarkController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.DaanHeitianCountermarkController();
         }
         return _instance;
      }
      
      public static function setup() : void
      {
         instance;
      }
      
      public function timerHandle() : void
      {
         var _loc2_:Date = null;
         var _loc4_:BroadcastInfo = null;
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:Date = new Date(2016,9,14);
         lefttime = _loc3_.time / 1000 - SystemTimerManager.time;
         if(_loc1_.time < _loc3_.time)
         {
            if(!(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 1))
            {
               if(Boolean(this.ui) && this.ui.currentFrame == 1)
               {
                  this.onRemove();
               }
            }
            ++this.checktime;
            if(_loc1_.hours >= 6 && _loc1_.hours <= 23 && _loc1_.minutes < 5 && this.checktime < 10)
            {
               (_loc4_ = new BroadcastInfo()).isLocal = true;
               _loc4_.map = 1207;
               _loc4_.txt = "宇宙之眼的镜面位面下起了流星雨！丰厚奖励等你来哦！";
               BroadcastController.addBroadcast(_loc4_);
            }
            else
            {
               this.checktime = 0;
               showidx = [0,1,2,3,4];
            }
         }
         else
         {
            SystemTimerManager.removeTickFun(this.timerHandle);
            this.onRemove();
         }
      }
      
      private function loadstartUI(param1:int) : void
      {
         var idx:int = param1;
         this.type = idx;
         if(this.ui)
         {
            this.ui.gotoAndStop(this.type);
            if(this.ui["num"])
            {
               KTool.showScore(this.ui["num"],lefttime / (3600 * 24),0,true);
            }
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0930/daanHeitianCountermarkpop"),function(param1:MovieClip):void
         {
            onRemove();
            ui = param1;
            ui.gotoAndStop(idx);
            LevelManager.iconLevel.addChild(ui);
            if(ui["num"])
            {
               KTool.showScore(ui["num"],lefttime / (3600 * 24),0,true);
            }
            ui.x = 258.75;
            ui.y = 136.1;
            ui.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "go":
               MapManager.changeMap(1207);
         }
      }
      
      private function onRemove() : void
      {
         if(this.ui)
         {
            this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
            if(this.ui.parent)
            {
               DisplayUtil.removeForParent(this.ui);
            }
            this.ui = null;
         }
      }
   }
}
