package com.robot.app.aimat.base
{
   import com.robot.core.SoundManager;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.IActionSprite;
   import flash.display.Shape;
   import flash.events.Event;
   import flash.filters.BitmapFilter;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.media.Sound;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.GeomUtil;
   
   public class BaseLaserAimat extends BaseAimat
   {
       
      
      private var _laserLine:Shape;
      
      private var _soundLine:Sound;
      
      private var _speed:Number = 50;
      
      private var _speedPos:Point;
      
      private var _laserMovePos:Point;
      
      private var _isLaserEnd:Boolean = false;
      
      protected var laserColor:uint = 16724787;
      
      protected var laserFilter:BitmapFilter;
      
      protected var laserThickness:Number = 1;
      
      public function BaseLaserAimat()
      {
         this._laserLine = new Shape();
         this.laserFilter = new GlowFilter(this.laserColor);
         super();
      }
      
      override public function execute(param1:AimatInfo) : void
      {
         super.execute(param1);
         var _loc2_:Point = param1.startPos;
         var _loc3_:Point = param1.endPos;
         if(Point.distance(_loc2_,_loc3_) < this._speed / 2)
         {
            return;
         }
         this._speedPos = GeomUtil.angleSpeed(_loc2_,_loc3_);
         this._speedPos.x *= this._speed;
         this._speedPos.y *= this._speed;
         this._laserLine = new Shape();
         this._laserLine.filters = [this.laserFilter];
         MapManager.currentMap.depthLevel.addChild(this._laserLine);
         this._laserMovePos = _loc2_.clone();
         this._laserLine.addEventListener(Event.ENTER_FRAME,this.onEnter);
         this._soundLine = UIManager.getSound("sound_10000");
         if(Boolean(this._soundLine) && Boolean(SoundManager.getIsPlay))
         {
            this._soundLine.play();
         }
      }
      
      private function onEnter(param1:Event) : void
      {
         var _loc2_:IActionSprite = null;
         this._laserLine.graphics.clear();
         this._laserLine.graphics.lineStyle(this.laserThickness,this.laserColor);
         if(Point.distance(this._laserMovePos,_info.endPos) < this._speed / 2)
         {
            if(this._isLaserEnd)
            {
               DisplayUtil.removeForParent(this._laserLine);
               this._laserLine.removeEventListener(Event.ENTER_FRAME,this.onEnter);
               this._laserLine = null;
               return;
            }
            this._isLaserEnd = true;
            this._laserMovePos = _info.startPos.clone();
            AimatController.dispatchEvent(AimatEvent.PLAY_END,_info);
            if(_info.aimatState != 0)
            {
               _loc2_ = MapManager.getObjectPoint(_info.endPos,[IActionSprite]) as IActionSprite;
               if(_loc2_)
               {
                  _loc2_.aimatState(_info);
               }
            }
         }
         if(this._isLaserEnd)
         {
            this._laserLine.graphics.moveTo(_info.endPos.x,_info.endPos.y);
            this._laserLine.graphics.lineTo(this._laserMovePos.x,this._laserMovePos.y);
         }
         else
         {
            this._laserLine.graphics.moveTo(_info.startPos.x,_info.startPos.y);
            this._laserLine.graphics.lineTo(this._laserMovePos.x,this._laserMovePos.y);
         }
         this._laserMovePos = this._laserMovePos.subtract(this._speedPos);
      }
      
      override public function destroy() : void
      {
         if(this._laserLine)
         {
            DisplayUtil.removeForParent(this._laserLine);
            this._laserLine.removeEventListener(Event.ENTER_FRAME,this.onEnter);
            this._laserLine = null;
         }
         super.destroy();
         this._soundLine = null;
         this._speedPos = null;
         this._laserMovePos = null;
      }
   }
}
