package com.robot.app.extFun
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.media.SoundPlayer;
   import org.taomee.utils.DisplayUtil;
   
   public class ExtFun_18 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _fitment:FitmentInfo;
      
      private var _info:PetShowInfo;
      
      private var _pet:MovieClip;
      
      private var _player:SoundPlayer;
      
      public function ExtFun_18()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._fitment = param2 as FitmentInfo;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._info)
         {
            ResourceManager.cancelURL(ClientConfig.getPetSwfPath(this._info.petID,this._info.catchTime));
            this._info = null;
         }
         if(this._pet)
         {
            DisplayUtil.removeForParent(this._pet);
            this._pet = null;
         }
         if(this._player)
         {
            this._player.destroy();
            this._player = null;
         }
         if(MainManager.actorModel.pet)
         {
            if(MainManager.actorModel.pet.info.petID == 201 || MainManager.actorModel.pet.info.petID == 202)
            {
               this._info = MainManager.actorModel.pet.info;
               MainManager.actorModel.hidePet();
               ResourceManager.getResource(ClientConfig.getPetSwfPath(this._info.petID,this._info.catchTime),function(param1:DisplayObject):void
               {
                  _pet = param1 as MovieClip;
                  _pet.y = -16;
                  _ui.addChild(_pet);
                  _player = new SoundPlayer(ClientConfig.getResPath("sound/" + _fitment.id + ".mp3"),true,true);
               });
            }
         }
      }
      
      public function destory() : void
      {
         if(this._info)
         {
            ResourceManager.cancelURL(ClientConfig.getPetSwfPath(this._info.petID,this._info.catchTime));
            this._info = null;
         }
         if(this._pet)
         {
            DisplayUtil.removeForParent(this._pet);
            this._pet = null;
         }
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
