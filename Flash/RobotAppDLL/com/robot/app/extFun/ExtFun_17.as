package com.robot.app.extFun
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.mode.IExtFun;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.media.SoundPlayer;
   
   public class ExtFun_17 implements IExtFun
   {
       
      
      private var _ui:MovieClip;
      
      private var _fitment:FitmentInfo;
      
      private var _player:SoundPlayer;
      
      public function ExtFun_17()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1 as MovieClip;
         this._fitment = param2 as FitmentInfo;
         this._ui.gotoAndStop(1);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = null;
         if(this._ui.currentFrame == 1)
         {
            this._ui.gotoAndStop(2);
            _loc2_ = String(ItemXMLInfo.getSound(this._fitment.id));
            if(_loc2_ != "")
            {
               this._player = new SoundPlayer(ClientConfig.getResPath("sound/" + _loc2_ + ".mp3"),true,true);
            }
         }
         else
         {
            this._ui.gotoAndStop(1);
            if(this._player)
            {
               this._player.destroy();
               this._player = null;
            }
         }
      }
      
      public function destory() : void
      {
         if(this._player)
         {
            this._player.destroy();
            this._player = null;
         }
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
         this._fitment = null;
      }
   }
}
