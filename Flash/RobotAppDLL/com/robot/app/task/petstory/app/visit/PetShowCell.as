package com.robot.app.task.petstory.app.visit
{
   import com.robot.app.task.petstory.evt.ItemSelectEvent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class PetShowCell extends AbstractCell
   {
       
      
      private var _obj:Object;
      
      private var _btn:SimpleButton;
      
      private var _title:MovieClip;
      
      private var _isFinish:Boolean = false;
      
      private var _timeMC:MovieClip;
      
      public function PetShowCell(param1:ApplicationDomain, param2:Object = null)
      {
         super(param1,param2);
         _app = param1;
         this._obj = param2;
         _mc = new (_app.getDefinition("PetCanvasMC") as Class)() as MovieClip;
         this.init();
         this.addChild(_mc);
      }
      
      private function init() : void
      {
         this._title = new (_app.getDefinition("StateMC") as Class)() as MovieClip;
         if(this._obj.lastTime == 0)
         {
            this._btn = new (_app.getDefinition("GoHomeBtn") as Class)() as SimpleButton;
            this._title.gotoAndStop(2);
            this._isFinish = true;
         }
         else
         {
            this._btn = new (_app.getDefinition("GiveUpBtn") as Class)() as SimpleButton;
            this._title.gotoAndStop(1);
            this.showLastTimeMC();
         }
         this._btn.x = 31;
         this._btn.y = 85;
         _mc.addChild(this._btn);
         this._title.x = 84;
         this._title.y = 18;
         _mc.addChild(this._title);
         this._btn.addEventListener(MouseEvent.CLICK,this.onMosueBtn);
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this._obj.monId,this._obj.captime),this.onPetComHandler,"pet");
      }
      
      private function onPetComHandler(param1:DisplayObject) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:MovieClip = null;
         if(param1)
         {
            _loc2_ = param1 as MovieClip;
            _loc3_ = _loc2_.getChildAt(0) as MovieClip;
            _loc3_.gotoAndStop(1);
            _loc2_.x = 40;
            _loc2_.y = 50;
            _loc2_.scaleX = _loc2_.scaleY = 1.2;
            (_mc["pet"] as MovieClip).addChild(_loc2_);
            ToolTipManager.add(_loc2_,PetBookXMLInfo.getName(this._obj.monId));
         }
      }
      
      private function showLastTimeMC() : void
      {
         var _loc2_:uint = 0;
         this._timeMC = new (_app.getDefinition("LastTimeMC") as Class)() as MovieClip;
         this._timeMC.x = 84;
         this._timeMC.y = 47;
         _mc.addChild(this._timeMC);
         var _loc1_:Array = this.getTimeArr();
         if(_loc1_[0] != undefined)
         {
            _loc2_ = uint(uint(_loc1_[0]) + 1);
            (this._timeMC["num_0"] as MovieClip).gotoAndStop(_loc2_);
         }
         if(_loc1_[1] != undefined)
         {
            _loc2_ = uint(uint(_loc1_[1]) + 1);
            (this._timeMC["num_1"] as MovieClip).gotoAndStop(_loc2_);
         }
         if(_loc1_[2] != undefined)
         {
            _loc2_ = uint(uint(_loc1_[2]) + 1);
            (this._timeMC["num_2"] as MovieClip).gotoAndStop(_loc2_);
         }
      }
      
      private function onMosueBtn(param1:MouseEvent) : void
      {
         this.dispatchEvent(new ItemSelectEvent(ItemSelectEvent.SELECT_ITEM));
      }
      
      private function getTimeArr() : Array
      {
         var _loc1_:uint = uint(this._obj.lastTime);
         var _loc2_:uint = uint(_loc1_ / (60 * 60));
         var _loc3_:Array = String(_loc2_).split("");
         _loc3_.reverse();
         return _loc3_;
      }
      
      public function getFinish() : Boolean
      {
         return this._isFinish;
      }
      
      public function getCapTime() : uint
      {
         return this._obj.captime;
      }
      
      public function getPetId() : uint
      {
         return this._obj.monId;
      }
   }
}
