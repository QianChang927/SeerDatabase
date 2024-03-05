package com.robot.app.petRoayle.ui
{
   import com.robot.app.petRoayle.PetRoayleInfo;
   import com.robot.app.petRoayle.PetRoayleMapController;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class FightShowMC
   {
       
      
      private var _infoArr:Array;
      
      private var _container:Sprite;
      
      private var _itemCls:Class;
      
      public function FightShowMC()
      {
         super();
         this._infoArr = [];
      }
      
      public function initMC(param1:Class) : void
      {
         this._itemCls = param1;
         this._container = new Sprite();
         this._container.x = 336;
         this._container.y = 110;
         MapManager.currentMap.controlLevel.addChild(this._container);
      }
      
      public function restoreMC() : void
      {
         DisplayUtil.removeForParent(this._container);
         this._container = null;
         this._itemCls = null;
      }
      
      public function addInfo(param1:PetRoayleInfo, param2:PetRoayleInfo) : void
      {
         this._infoArr.push([param1.userID,param2.userID]);
         this.showMC();
      }
      
      public function removeInfo(param1:uint) : void
      {
         var _loc2_:int = int(this._infoArr.length - 1);
         while(_loc2_ >= 0)
         {
            if(this._infoArr[_loc2_][0] == param1 || this._infoArr[_loc2_][1] == param1)
            {
               this._infoArr.splice(_loc2_,1);
               break;
            }
            _loc2_--;
         }
         this.showMC();
      }
      
      public function showMC() : void
      {
         var _loc1_:Array = null;
         var _loc2_:MovieClip = null;
         if(this._container)
         {
            while(this._container.numChildren > 0)
            {
               this._container.removeChildAt(0);
            }
            for each(_loc1_ in this._infoArr)
            {
               _loc2_ = new this._itemCls() as MovieClip;
               _loc2_["name1"].text = PetRoayleMapController.roayleManager.getInfoByID(_loc1_[0]).nick;
               _loc2_["name2"].text = PetRoayleMapController.roayleManager.getInfoByID(_loc1_[1]).nick;
               _loc2_.y = this._container.height + 5;
               this._container.addChild(_loc2_);
            }
         }
      }
      
      public function destroy() : void
      {
         this._infoArr = null;
      }
   }
}
