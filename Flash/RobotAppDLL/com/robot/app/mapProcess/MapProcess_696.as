package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task832;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_696 extends BaseMapProcess
   {
       
      
      private var count:int = 0;
      
      public function MapProcess_696()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["guide"].visible = false;
         this.initMap();
         this.initSpring();
         Task832.initForMap696(this);
      }
      
      private function initMap() : void
      {
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onShootStone);
         ToolTipManager.add(this.stone1,"用头部射击击碎石柱");
         ToolTipManager.add(this.stone2,"用头部射击击碎石柱");
         CommonUI.addYellowArrow(topLevel,320,50,225);
         CommonUI.addYellowArrow(topLevel,460,70,225);
      }
      
      private function onShootStone(param1:AimatEvent) : void
      {
         var event:AimatEvent = param1;
         var checkStone:Function = function(param1:int):void
         {
            var blood:MovieClip;
            var index:int = param1;
            CommonUI.removeYellowArrow(topLevel);
            CommonUI.removeYellowArrow(topLevel);
            blood = conLevel["blood" + index];
            if(blood.visible)
            {
               blood["perMC"].gotoAndStop(blood["perMC"].currentFrame + 1);
               if(blood["perMC"].currentFrame == 3)
               {
                  conLevel["guide"]["guide" + index].visible = false;
                  blood.visible = false;
                  AnimateManager.playMcAnimate(conLevel["stone" + index],2,"mc",function():void
                  {
                     typeLevel["stone" + index].visible = false;
                     MapManager.currentMap.makeMapArray();
                     Task832.checkIsFinished();
                  });
                  conLevel["stone" + index].mouseEnabled = false;
                  conLevel["stone" + index].mouseChildren = false;
               }
            }
            else
            {
               blood.visible = true;
            }
         };
         var point:Point = event.info.endPos;
         if(this.stone1.currentFrame == 1)
         {
            if(this.stone1.hitTestPoint(point.x,point.y))
            {
               checkStone(1);
            }
         }
         if(this.stone2.currentFrame == 1)
         {
            if(this.stone2.hitTestPoint(point.x,point.y))
            {
               checkStone(2);
            }
         }
      }
      
      public function showRoad() : void
      {
         this.stone1.gotoAndStop(3);
         this.stone2.gotoAndStop(3);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onShootStone);
         typeLevel["stone1"].visible = false;
         typeLevel["stone2"].visible = false;
         MapManager.currentMap.makeMapArray();
         this.stone1.mouseEnabled = false;
         this.stone1.mouseChildren = false;
         this.stone2.mouseEnabled = false;
         this.stone2.mouseChildren = false;
      }
      
      private function get stone1() : MovieClip
      {
         return conLevel["stone1"];
      }
      
      private function get stone2() : MovieClip
      {
         return conLevel["stone2"];
      }
      
      private function initSpring() : void
      {
         var _loc2_:MovieClip = null;
         this.count = 0;
         var _loc1_:int = 1;
         while(_loc1_ < 4)
         {
            _loc2_ = conLevel["sp" + _loc1_];
            _loc2_.addEventListener(MouseEvent.CLICK,this.onSpClicked);
            _loc2_.buttonMode = true;
            _loc1_++;
         }
      }
      
      private function removeSpliss() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 1;
         while(_loc1_ < 4)
         {
            _loc2_ = conLevel["sp" + _loc1_];
            _loc2_.removeEventListener(MouseEvent.CLICK,this.onSpClicked);
            _loc1_++;
         }
      }
      
      private function onSpClicked(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var e:MouseEvent = param1;
         mc = e.currentTarget as MovieClip;
         MainManager.actorModel.moveAndAction(new Point(640,175),function():void
         {
            var _loc1_:MovieClip = null;
            mc.buttonMode = false;
            mc.removeEventListener(MouseEvent.CLICK,onSpClicked);
            mc.gotoAndStop(2);
            ++count;
            if(count == 3)
            {
               removeSpliss();
               _loc1_ = conLevel["sp"];
               Task832.showStone();
            }
         });
      }
      
      override public function destroy() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onShootStone);
         this.removeSpliss();
         Task832.destroy();
         super.destroy();
      }
   }
}
