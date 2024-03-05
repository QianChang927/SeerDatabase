package com.robot.app.aimat.base
{
   import com.robot.core.SoundManager;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.AimatUIManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.IActionSprite;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.GeomUtil;
   
   public class BaseAnimateAimat extends BaseAimat
   {
       
      
      private var _line:MovieClip;
      
      private var _effect:MovieClip;
      
      private var _soundLine:Sound;
      
      private var _soundChannelLine:SoundChannel;
      
      private var _soundEffect:Sound;
      
      private var _speed:Number = 30;
      
      private var _speedPos:Point;
      
      public function BaseAnimateAimat()
      {
         super();
      }
      
      override public function execute(param1:AimatInfo) : void
      {
         super.execute(param1);
         this._speedPos = GeomUtil.angleSpeed(_info.endPos,_info.startPos);
         this._speedPos.x *= this._speed;
         this._speedPos.y *= this._speed;
         this._line = AimatUIManager.getMovieClip(_info.id,"line");
         this._line.x = _info.startPos.x;
         this._line.y = _info.startPos.y;
         this._line.mouseEnabled = false;
         this._line.mouseChildren = false;
         this._line.rotation = GeomUtil.pointAngle(_info.endPos,_info.startPos);
         this._line.addEventListener(Event.ENTER_FRAME,this.onLineEnter);
         MapManager.currentMap.depthLevel.addChild(this._line);
         this._soundLine = AimatUIManager.getSound(_info.id,"sound_line");
         if(Boolean(this._soundLine) && Boolean(SoundManager.getIsPlay))
         {
            this._soundChannelLine = this._soundLine.play();
         }
      }
      
      private function onLineEnter(param1:Event) : void
      {
         var _loc2_:IActionSprite = null;
         if(Math.abs(this._line.x - _info.endPos.x) < this._speed / 2 && Math.abs(this._line.y - _info.endPos.y) < this._speed / 2)
         {
            this.destroyLine();
            AimatController.dispatchEvent(AimatEvent.PLAY_END,_info);
            if(_info.aimatState != 0)
            {
               _loc2_ = MapManager.getObjectPoint(_info.endPos,[IActionSprite]) as IActionSprite;
               if(_loc2_)
               {
                  _loc2_.aimatState(_info);
               }
            }
            this._effect = AimatUIManager.getMovieClip(_info.id,"effect");
            if(this._effect)
            {
               this._effect.x = _info.endPos.x;
               this._effect.y = _info.endPos.y;
               this._effect.mouseEnabled = false;
               this._effect.mouseChildren = false;
               this._effect.addEventListener(Event.ENTER_FRAME,this.onEffectEnter);
               MapManager.currentMap.depthLevel.addChild(this._effect);
               if(this._soundChannelLine)
               {
                  this._soundChannelLine.stop();
               }
               this._soundEffect = AimatUIManager.getSound(_info.id,"sound_effect");
               if(Boolean(this._soundEffect) && Boolean(SoundManager.getIsPlay))
               {
                  this._soundEffect.play();
               }
            }
            return;
         }
         this._line.x += this._speedPos.x;
         this._line.y += this._speedPos.y;
      }
      
      private function onEffectEnter(param1:Event) : void
      {
         if(this._effect.currentFrame == this._effect.totalFrames)
         {
            this.destroyEffect();
         }
      }
      
      private function destroyLine() : void
      {
         if(this._line)
         {
            DisplayUtil.removeForParent(this._line);
            this._line.removeEventListener(Event.ENTER_FRAME,this.onLineEnter);
            this._line = null;
         }
      }
      
      private function destroyEffect() : void
      {
         if(this._effect)
         {
            DisplayUtil.removeForParent(this._effect);
            this._effect.removeEventListener(Event.ENTER_FRAME,this.onEffectEnter);
            this._effect = null;
         }
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this.destroyLine();
         this.destroyEffect();
         this._speedPos = null;
      }
   }
}
