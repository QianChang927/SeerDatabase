package com.robot.module.app.petBag.subModule.petBagChoose
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagbattleArraySecondPetItemView extends PetBagSubModule
   {
      
      private static var _headCache:HashMap = new HashMap();
       
      
      private var _petListInfo:PetListInfo;
      
      protected var _index:int;
      
      protected var _headWidth:Number = 70;
      
      protected var _isSetRed:Boolean;
      
      public function PetBagbattleArraySecondPetItemView(index:int, petListInfo:PetListInfo, isSetRed:Boolean = false)
      {
         super();
         initUi("secondPetBagItem");
         onFocusPetChange();
         buttonMode = true;
         this._headWidth = 82.05;
         this._index = index;
         this._petListInfo = petListInfo;
         this._isSetRed = isSetRed;
         this.update();
      }
      
      public function update() : void
      {
         var headIcon:DisplayObject = null;
         var leveTip:MovieClip = null;
         var unlockLevel:int = 0;
         var unlockLevel1:int = 0;
         DisplayUtil.removeAllChild(_ui["headContainer"]);
         _ui["petName"].text = "";
         _ui["levelTxt"].text = "";
         this.mouseChildren = false;
         this.mouseEnabled = false;
         if(_ui["petFirst_1"] != null)
         {
            _ui["petFirst_1"].visible = false;
         }
         if(_ui["petFirst_2"] != null)
         {
            _ui["petFirst_2"].visible = false;
         }
         if(this.petListInfo == null)
         {
            _ui.gotoAndStop(2);
            _ui["bg"].visible = false;
            _ui.gotoAndStop(1);
            _ui["bg"].visible = false;
            leveTip = _ui["vipMc"];
            leveTip.visible = !this.isUnlock;
            if(!this.isUnlock)
            {
               unlockLevel = int(PetManager.SECOND_BAG_UNLOCK_LEVELS[this._index]);
               leveTip["vipLevelMc"].gotoAndStop(unlockLevel);
            }
            return;
         }
         if(focusPet != null && focusPet.catchTime == this.petListInfo.catchTime)
         {
            _ui.gotoAndStop(2);
         }
         else
         {
            _ui.gotoAndStop(1);
         }
         if(this._isSetRed)
         {
            _ui.gotoAndStop(4);
         }
         var key:String = "" + this._headWidth + this.petListInfo.catchTime;
         if(Boolean(_headCache.getValue(key)))
         {
            headIcon = _headCache.getValue(key);
         }
         else
         {
            headIcon = this.getHeadIcon();
            _headCache.add(key,headIcon);
         }
         _ui["bg"].visible = true;
         _ui["headContainer"].addChild(headIcon);
         _ui["petName"].text = PetXMLInfo.getName(this.petListInfo.id);
         _ui["levelTxt"].text = this.petListInfo.level;
         var leveTip1:MovieClip = _ui["vipMc"];
         leveTip1.visible = !this.isUnlock;
         if(!this.isUnlock)
         {
            unlockLevel1 = int(PetManager.SECOND_BAG_UNLOCK_LEVELS[this._index]);
            leveTip1["vipLevelMc"].gotoAndStop(unlockLevel1);
         }
      }
      
      private function getHeadIcon() : DisplayObject
      {
         var result:Sprite = null;
         result = new Sprite();
         ResourceManager.getResource(ClientConfig.getPetHeadPath(this.petListInfo.id,this.petListInfo.catchTime,0),function(dis:DisplayObject):void
         {
            var showMc:MovieClip = dis as MovieClip;
            showMc.scaleX = showMc.scaleY = _headWidth / 85;
            showMc.y = -_headWidth / 2;
            showMc.x = -_headWidth / 2;
            result.addChild(showMc);
         },"item");
         return result;
      }
      
      public function get isUnlock() : Boolean
      {
         return this._index + 1 <= PetManager.secondBagTotalLength;
      }
      
      public function set petListInfo(info:PetListInfo) : void
      {
         this._petListInfo = info;
      }
      
      public function get petListInfo() : PetListInfo
      {
         return this._petListInfo;
      }
   }
}
