package com.robot.module.app.petBag.subModule.petH5battleArray
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.PetPropAddController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagH5battleArraySecondPetItemView extends PetBagSubModule
   {
      
      private static var _headCache:HashMap = new HashMap();
       
      
      private var _petInfo:PetInfo;
      
      protected var _index:int;
      
      protected var _headWidth:Number = 70;
      
      protected var _type:int;
      
      public function PetBagH5battleArraySecondPetItemView(index:int, petInfo:PetInfo, type:int)
      {
         super();
         initUi("h5secondPetBagItem");
         onFocusPetChange();
         buttonMode = true;
         this._headWidth = 80;
         this._index = index;
         this._petInfo = petInfo;
         this._type = type;
         this.update();
      }
      
      public function update() : void
      {
         var headIcon:DisplayObject = null;
         var leveTip:MovieClip = null;
         var unlockLevel:int = 0;
         var unlockLevel1:int = 0;
         DisplayUtil.removeAllChild(_ui["headMc"]["headContainer"]);
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
         if(this.petInfo == null)
         {
            _ui.gotoAndStop(1);
            leveTip = _ui["vipMc"];
            leveTip.visible = !this.isUnlock;
            if(!this.isUnlock)
            {
               unlockLevel = int(PetManager.SECOND_BAG_UNLOCK_LEVELS[this._index]);
               leveTip["vipLevelMc"].gotoAndStop(unlockLevel);
            }
            _ui["bar"].visible = false;
            _ui["bloodText"].visible = false;
            _ui["bar"].gotoAndStop(1);
            _ui["typeMc"].visible = false;
            return;
         }
         if(focusPet != null && focusPet.catchTime == this.petInfo.catchTime)
         {
            _ui.gotoAndStop(2);
         }
         else
         {
            _ui.gotoAndStop(1);
         }
         if(this._type > 0)
         {
            _ui["typeMc"].gotoAndStop(this._type);
            _ui["typeMc"].visible = true;
         }
         else
         {
            _ui["typeMc"].visible = false;
         }
         var key:String = "" + this._headWidth + this.petInfo.catchTime;
         if(Boolean(_headCache.getValue(key)))
         {
            headIcon = _headCache.getValue(key);
         }
         else
         {
            headIcon = this.getHeadIcon();
            _headCache.add(key,headIcon);
         }
         _ui["headMc"]["headContainer"].addChild(headIcon);
         _ui["petName"].text = PetXMLInfo.getName(this.petInfo.id);
         _ui["levelTxt"].text = this.petInfo.level;
         var displayHp:uint = this.petInfo.hp > 0 ? uint(this.petInfo.hp + PetPropAddController.getAllAddList(this.petInfo)[5]) : uint(this.petInfo.hp);
         var displayMaxHp:uint = this.petInfo.maxHp + PetPropAddController.getAllAddList(this.petInfo)[5];
         if(this.petInfo.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
         {
            displayMaxHp += 20;
            if(displayHp > 0)
            {
               displayHp += 20;
            }
         }
         _ui["bloodText"].visible = true;
         _ui["bloodText"].text = displayHp + "/" + displayMaxHp;
         var frame:int = displayHp / displayMaxHp * 100;
         _ui["bar"].gotoAndStop(frame);
         _ui["bar"].visible = true;
         var leveTip1:MovieClip = _ui["vipMc"];
         leveTip1.visible = !this.isUnlock;
         if(!this.isUnlock)
         {
            unlockLevel1 = int(PetManager.SECOND_BAG_UNLOCK_LEVELS[this._index]);
            leveTip1["vipLevelMc"].gotoAndStop(unlockLevel1);
         }
      }
      
      override public function destory() : void
      {
         if(Boolean(_headCache))
         {
            _headCache.eachValue(function(value:*):void
            {
               DisplayUtil.removeAllChild(value);
               value = null;
            });
            _headCache.clear();
            _headCache = null;
         }
         this._petInfo = null;
         super.destory();
      }
      
      private function getHeadIcon() : DisplayObject
      {
         var result:Sprite = null;
         result = new Sprite();
         ResourceManager.getResource(ClientConfig.getPetHeadPath(this.petInfo.id,this.petInfo.catchTime,0),function(dis:DisplayObject):void
         {
            var showMc:MovieClip = dis as MovieClip;
            showMc.scaleX = showMc.scaleY = _headWidth / 80;
            showMc.y = -_headWidth / 2;
            showMc.x = -_headWidth / 2;
            if(Boolean(result))
            {
               result.addChild(showMc);
            }
         },"item");
         return result;
      }
      
      public function get isUnlock() : Boolean
      {
         return this._index + 1 <= PetManager.secondBagTotalLength;
      }
      
      public function set petInfo(info:PetInfo) : void
      {
         this._petInfo = info;
      }
      
      public function get petInfo() : PetInfo
      {
         return this._petInfo;
      }
   }
}
