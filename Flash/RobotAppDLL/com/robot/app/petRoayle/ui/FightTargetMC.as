package com.robot.app.petRoayle.ui
{
   import com.robot.app.petRoayle.PetRoayleInfo;
   import com.robot.app.petRoayle.PetRoayleMapController;
   import com.robot.app.petRoayle.RoaylePeopleModelWrapper;
   import com.robot.core.battleRoyale.Face;
   import com.robot.core.config.xml.PetXMLInfo;
   import flash.display.MovieClip;
   import gs.TweenLite;
   
   public class FightTargetMC
   {
      
      private static const START_Y:int = -110;
      
      private static const END_Y:int = 100;
       
      
      private var _info:PetRoayleInfo;
      
      private var _mc:MovieClip;
      
      private var _face:Face;
      
      public function FightTargetMC(param1:MovieClip)
      {
         super();
         this._mc = param1;
         this._mc.y = START_Y;
      }
      
      public function show(param1:PetRoayleInfo) : void
      {
         if(param1)
         {
            if(Boolean(this._info) && this._info.userID == param1.userID)
            {
               return;
            }
            this._info = param1;
            this.showHelper();
         }
         else
         {
            this._info = null;
            this._mc["nickName"].text = "";
            this._mc["petName"].text = "";
            if(this._face)
            {
               this._face.destroy();
               this._face = null;
            }
            this.hideHelper();
         }
      }
      
      private function hideHelper() : void
      {
         this._mc.y = START_Y;
      }
      
      private function showHelper() : void
      {
         this._mc.y = START_Y;
         this._mc["nickName"].text = this._info.nick;
         this._mc["petName"].text = PetXMLInfo.getName(this._info.petID);
         if(this._face)
         {
            this._face.destroy();
            this._face = null;
         }
         var _loc1_:RoaylePeopleModelWrapper = PetRoayleMapController.roayleManager.getWrapperByID(this._info.userID);
         if(_loc1_ && _loc1_.model && Boolean(_loc1_.model.info))
         {
            this._face = new Face(this._mc["face"],_loc1_.model.info,60);
         }
         TweenLite.to(this._mc,0.5,{"y":END_Y});
      }
      
      public function destroy() : void
      {
         this._mc = null;
         this._info = null;
      }
   }
}
