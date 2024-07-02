package com.robot.module.app.petBag.subModule.petList
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetListItemBaseView extends PetBagSubModule
   {
       
      
      protected var _index:int;
      
      protected var _headWidth:Number = 70;
      
      private var _headCache:HashMap;
      
      private var showFirstPet:Boolean = false;
      
      public function PetListItemBaseView(index:int, startPosition:Point, spacing:Number)
      {
         this._headCache = new HashMap();
         x = startPosition.x + index * spacing;
         y = startPosition.y;
         this._index = index;
         super();
         this.mouseChildren = false;
         this.buttonMode = true;
      }
      
      override protected function initUi(symbolName:String) : void
      {
         super.initUi(symbolName);
         _eventCom.addRollOverEvent(_ui,this.onTipRollOver);
         _eventCom.addRollOutEvent(_ui,this.onTipRollOut);
      }
      
      override protected function onFocusPetChange() : void
      {
         this.update();
      }
      
      public function update() : void
      {
         var headIcon:DisplayObject = null;
         DisplayUtil.removeAllChild(_ui["headContainer"]);
         _ui["petName"].text = "";
         _ui["levelTxt"].text = "";
         if(_ui["petFirst_1"] != null)
         {
            _ui["petFirst_1"].visible = false;
         }
         if(_ui["petFirst_2"] != null)
         {
            _ui["petFirst_2"].visible = false;
         }
         if(this.petInfo == null)
         {
            _ui.gotoAndStop(2);
            _ui["bg"].visible = false;
            _ui.gotoAndStop(1);
            _ui["bg"].visible = false;
            this.mouseChildren = false;
            this.buttonMode = true;
            return;
         }
         this.mouseChildren = true;
         this.buttonMode = false;
         if(focusPet != null && focusPet.catchTime == this.petInfo.catchTime)
         {
            _ui.gotoAndStop(2);
         }
         else
         {
            _ui.gotoAndStop(1);
         }
         var key:String = "" + this._headWidth + this.petInfo.catchTime + this.petInfo.skinId;
         if(Boolean(this._headCache.getValue(key)))
         {
            headIcon = this._headCache.getValue(key);
         }
         else
         {
            headIcon = this.getHeadIcon();
            this._headCache.add(key,headIcon);
         }
         _ui["bg"].visible = true;
         _ui["headContainer"].addChild(headIcon);
         _ui["petName"].text = PetXMLInfo.getName(this.petInfo.id);
         _ui["levelTxt"].text = this.petInfo.level;
         this.mouseEnabled = this.petInfo != null;
      }
      
      private function getHeadIcon() : DisplayObject
      {
         var result:Sprite = null;
         result = new Sprite();
         ResourceManager.getResource(ClientConfig.getPetHeadPath(this.petInfo.id,this.petInfo.catchTime,this.petInfo.skinId),function(dis:DisplayObject):void
         {
            var showMc:MovieClip = dis as MovieClip;
            showMc.scaleX = showMc.scaleY = _headWidth / 85;
            showMc.y = -_headWidth / 2;
            showMc.x = -_headWidth / 2;
            if(Boolean(result))
            {
               result.addChild(showMc);
            }
         },"item");
         return result;
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         if(this.petInfo == null)
         {
            return;
         }
         if(this.petInfo != focusPet)
         {
            moduleData.setData(DataKeys.FOCUS_PET,this.petInfo);
         }
         if(this.petInfo.catchTime == PetManager.defaultTime && moduleData.firstBagInfos.length > 0)
         {
            this.mouseChildren = false;
            this.buttonMode = true;
         }
         else
         {
            this.mouseChildren = true;
            this.buttonMode = false;
         }
      }
      
      private function onTipRollOver(e:MouseEvent) : void
      {
         if(this.petInfo == null)
         {
            return;
         }
         if(this.petInfo.catchTime == PetManager.defaultTime && moduleData.firstBagInfos.length > 0)
         {
            if(_ui["petFirst_1"] != null)
            {
               _ui["petFirst_1"].visible = false;
            }
            if(_ui["petFirst_2"] != null)
            {
               _ui["petFirst_2"].visible = false;
            }
         }
         else
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            if(_ui["petFirst_1"] != null)
            {
               _ui["petFirst_1"].visible = true;
            }
            if(_ui["petFirst_2"] != null)
            {
               _ui["petFirst_2"].visible = true;
            }
            this.showFirstPet = true;
         }
      }
      
      private function onTipRollOut(e:MouseEvent) : void
      {
         if(_ui["petFirst_1"] != null)
         {
            _ui["petFirst_1"].visible = false;
         }
         if(_ui["petFirst_2"] != null)
         {
            _ui["petFirst_2"].visible = false;
         }
         this.showFirstPet = false;
      }
      
      public function get petInfo() : PetInfo
      {
         return null;
      }
      
      public function startSwap() : void
      {
      }
      
      public function endSwap() : void
      {
      }
      
      public function get index() : int
      {
         return this._index;
      }
      
      override public function destory() : void
      {
         if(Boolean(this._headCache))
         {
            this._headCache.eachValue(function(value:*):void
            {
               DisplayUtil.removeAllChild(value);
               DisplayUtil.removeForParent(value);
               value = null;
            });
            this._headCache.clear();
            this._headCache = null;
         }
         super.destory();
      }
   }
}
