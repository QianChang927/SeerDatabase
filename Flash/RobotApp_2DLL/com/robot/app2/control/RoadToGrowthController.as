package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RoadToGrowthController
   {
      
      private static var finishTaskID:int;
      
      private static var crtRewardState:int;
      
      private static var _icon:MovieClip;
       
      
      public function RoadToGrowthController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         var checkState:Function = function():void
         {
            if(finishTaskID == 30 && crtRewardState == 1)
            {
               destroy();
            }
            updateIconState();
         };
         _icon = icon;
         _icon.gotoAndStop(1);
         KTool.getMultiValue([3184,3185],function(param1:Array):void
         {
            finishTaskID = param1[0];
            if(finishTaskID)
            {
               crtRewardState = KTool.getBit(param1[1],finishTaskID);
            }
            if(finishTaskID % 5 == 0 && finishTaskID > 0 && KTool.getBit(param1[1],finishTaskID - 1) == 0)
            {
               --finishTaskID;
               crtRewardState = 0;
            }
            checkState();
         });
         SocketConnection.removeCmdListener(45091,onNotice);
         SocketConnection.addCmdListener(45091,onNotice);
      }
      
      public static function update() : void
      {
         setup(_icon);
      }
      
      private static function onNotice(param1:* = null) : void
      {
         var e:* = param1;
         setup(_icon);
         if(finishTaskID == 2)
         {
            showComplete();
            setTimeout(function():void
            {
               onClickIcon(null);
            },3000);
         }
         else if(finishTaskID == 3)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               showComplete();
               setTimeout(function():void
               {
                  onClickIcon(null);
               },3000);
            });
         }
      }
      
      public static function updateIconState() : void
      {
         if(!_icon)
         {
            return;
         }
         if(crtRewardState == 1 || finishTaskID == 0)
         {
            _icon.gotoAndStop(1);
         }
         else
         {
            _icon.gotoAndStop(2);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(45091,onNotice);
         IconController.hideIcon("RoadToGrowth");
         _icon = null;
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         StatManager.sendStat2014("成长之路优化+刻印","icon点击人数",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("RoadToGrowthPanel"));
      }
      
      public static function showMC(param1:String, param2:Function) : void
      {
         var index:String = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getMapAnimate("roadToGrowth_" + index),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            DisplayUtil.removeForParent(LevelManager.mapLevel,false);
            DisplayUtil.removeForParent(LevelManager.toolsLevel,false);
            DisplayUtil.removeForParent(LevelManager.iconLevel,false);
            DisplayUtil.removeForParent(LevelManager.topLevel,false);
            DisplayUtil.removeForParent(LevelManager.tipLevel,false);
            LevelManager.appLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               DisplayUtil.removeForParent(mc);
               LevelManager.addLevel();
               fun();
            });
         },"ani");
      }
      
      public static function showFullMC(param1:String, param2:Function) : void
      {
         var index:String = param1;
         var fun:Function = param2;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("roadToGrowth_" + index),function():void
         {
            fun();
         });
      }
      
      public static function showComplete() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("roadToGrowthTaskComplete"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.appLevel.addChild(mc);
            mc.x = 300;
            mc.y = 190;
            setup(_icon);
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               DisplayUtil.removeForParent(mc);
            });
         });
      }
   }
}
