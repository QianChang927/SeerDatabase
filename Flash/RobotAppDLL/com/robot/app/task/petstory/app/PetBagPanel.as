package com.robot.app.task.petstory.app
{
   import com.robot.app.petbag.ui.PetBagListItem;
   import com.robot.app.task.petstory.evt.PetBagEvent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.StringUtil;
   
   public class PetBagPanel extends Sprite
   {
      
      public static const PET_CHOOSE:String = "Pet_Bag_Choose";
      
      private static const LIST_LENGTH:int = 6;
       
      
      private const PATH:String = ClientConfig.getResPath("module/ext/app/petBag.swf");
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _chooseBtn:SimpleButton;
      
      private var _dragBtn:SimpleButton;
      
      private var _listCon:Sprite;
      
      private var _titleMC:MovieClip;
      
      private var _curretItem:PetBagListItem;
      
      private var _chosPetIDArr:Array;
      
      private var _isMaster:Boolean = false;
      
      private var _isHigh:Boolean = false;
      
      private var _titleId:uint = 1;
      
      private var _infoMC:MovieClip;
      
      private var _infoClose:SimpleButton;
      
      private var _selectList:Array;
      
      public function PetBagPanel(param1:uint = 1, param2:Boolean = false, param3:Array = null)
      {
         this._chosPetIDArr = [];
         super();
         this._isHigh = param2;
         this._selectList = param3;
         this._titleId = param1;
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.topLevel,1,"正在加载背包面板");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
         else
         {
            this.showPanel();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         var _loc3_:PetBagListItem = null;
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("PetBag_UI") as Class)() as MovieClip;
         this._chooseBtn = this._mainUI["chooseBtn"];
         this._closeBtn = this._mainUI["closeBtn"];
         this._dragBtn = this._mainUI["dragBtn"];
         this._titleMC = this._mainUI["titleMC"];
         if(this._titleId > 0)
         {
            this._titleMC.visible = true;
            this._titleMC.gotoAndStop(this._titleId);
         }
         else
         {
            this._titleMC.visible = false;
         }
         this._listCon = new Sprite();
         this._listCon.x = 30;
         this._listCon.y = 70;
         this._mainUI.addChild(this._listCon);
         var _loc2_:int = 0;
         while(_loc2_ < LIST_LENGTH)
         {
            _loc3_ = new PetBagListItem();
            _loc3_.y = (_loc3_.height + 6) * int(_loc2_ / 2);
            _loc3_.x = (_loc3_.width + 6) * (_loc2_ % 2);
            this._listCon.addChild(_loc3_);
            _loc2_++;
         }
         this.initPetInfoPanel();
         this.addEvent();
         this.showPanel();
      }
      
      private function initPetInfoPanel() : void
      {
         this._infoMC = new (this._app.getDefinition("PetInfo_UI") as Class)() as MovieClip;
         this._infoMC.data = {"isShow":false};
         this._infoClose = this._infoMC["closeBtn"];
         this._infoClose.addEventListener(MouseEvent.CLICK,this.onMouseInfoClose);
      }
      
      private function onMouseInfoClose(param1:MouseEvent) : void
      {
         this._infoMC.data["isShow"] = false;
         DisplayUtil.removeForParent(this._infoMC);
      }
      
      private function showPetInfo(param1:PetInfo) : void
      {
         this.initPetInfo(param1);
         this._infoMC.data["isShow"] = true;
         this._infoMC.x = this._mainUI.x + this._mainUI.width + 1;
         this._infoMC.y = this._mainUI.y;
         LevelManager.appLevel.addChild(this._infoMC);
      }
      
      private function initPetInfo(param1:PetInfo) : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(param1.id,param1.catchTime),this.onPetComHandler,"pet");
         (this._infoMC["txt_0"] as TextField).text = "" + param1.id;
         (this._infoMC["txt_0"] as TextField).selectable = false;
         (this._infoMC["txt_1"] as TextField).text = PetBookXMLInfo.getName(param1.id);
         (this._infoMC["txt_1"] as TextField).selectable = false;
         (this._infoMC["txt_2"] as TextField).text = "" + param1.level;
         (this._infoMC["txt_2"] as TextField).selectable = false;
         (this._infoMC["txt_3"] as TextField).htmlText = "<font color=\'#ffff00\'>" + NatureXMLInfo.getName(param1.nature) + "</font>";
         (this._infoMC["txt_3"] as TextField).selectable = false;
         ToolTipManager.add(this._infoMC["txt_3"],NatureXMLInfo.getDes(param1.nature));
         (this._infoMC["txt_5"] as TextField).text = StringUtil.timeFormat(param1.catchTime);
         (this._infoMC["txt_5"] as TextField).selectable = false;
         (this._infoMC["txt_6"] as TextField).text = param1.attack.toString();
         (this._infoMC["txt_6"] as TextField).selectable = false;
         (this._infoMC["txt_7"] as TextField).htmlText = "<font color=\'#ffff00\'>" + param1.ev_attack.toString() + "</font>";
         (this._infoMC["txt_7"] as TextField).selectable = false;
         (this._infoMC["txt_8"] as TextField).text = param1.defence.toString();
         (this._infoMC["txt_8"] as TextField).selectable = false;
         (this._infoMC["txt_9"] as TextField).htmlText = "<font color=\'#ffff00\'>" + param1.ev_defence.toString() + "</font>";
         (this._infoMC["txt_9"] as TextField).selectable = false;
         (this._infoMC["txt_10"] as TextField).text = param1.s_a.toString();
         (this._infoMC["txt_10"] as TextField).selectable = false;
         (this._infoMC["txt_11"] as TextField).htmlText = "<font color=\'#ffff00\'>" + param1.ev_sa.toString() + "</font>";
         (this._infoMC["txt_11"] as TextField).selectable = false;
         (this._infoMC["txt_12"] as TextField).text = param1.s_d.toString();
         (this._infoMC["txt_12"] as TextField).selectable = false;
         (this._infoMC["txt_13"] as TextField).htmlText = "<font color=\'#ffff00\'>" + param1.ev_sd.toString() + "</font>";
         (this._infoMC["txt_13"] as TextField).selectable = false;
         (this._infoMC["txt_14"] as TextField).text = param1.speed.toString();
         (this._infoMC["txt_14"] as TextField).selectable = false;
         (this._infoMC["txt_15"] as TextField).htmlText = "<font color=\'#ffff00\'>" + param1.ev_sp.toString() + "</font>";
         (this._infoMC["txt_15"] as TextField).selectable = false;
         (this._infoMC["txt_16"] as TextField).text = param1.hp.toString();
         (this._infoMC["txt_16"] as TextField).selectable = false;
         (this._infoMC["txt_17"] as TextField).htmlText = "<font color=\'#ffff00\'>" + param1.ev_hp.toString() + "</font>";
         (this._infoMC["txt_17"] as TextField).selectable = false;
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
            _loc2_.x = 45;
            _loc2_.y = 70;
            _loc2_.scaleX = _loc2_.scaleY = 1.2;
            DisplayUtil.removeAllChild(this._infoMC["pet"] as MovieClip);
            (this._infoMC["pet"] as MovieClip).addChild(_loc2_);
         }
      }
      
      private function addEvent() : void
      {
         this._chooseBtn.addEventListener(MouseEvent.CLICK,this.onChoosePet);
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._dragBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._dragBtn.addEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onUpDate);
      }
      
      private function removeEvent() : void
      {
         this._chooseBtn.removeEventListener(MouseEvent.CLICK,this.onChoosePet);
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._dragBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._dragBtn.removeEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onUpDate);
      }
      
      private function onDragDown(param1:MouseEvent) : void
      {
         this._mainUI.startDrag();
      }
      
      private function onDragUp(param1:MouseEvent) : void
      {
         this._mainUI.stopDrag();
      }
      
      private function onChoosePet(param1:MouseEvent) : void
      {
         if(this._curretItem == null)
         {
            Alarm.show("请选择你的精灵噢！");
            return;
         }
         EventManager.dispatchEvent(new DynamicEvent(PET_CHOOSE,this._curretItem.info));
         this.onCloseBtn(new MouseEvent(MouseEvent.CLICK));
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         if(this._curretItem)
         {
            this._curretItem.isSelect = false;
            this._curretItem = null;
         }
         this._curretItem = param1.currentTarget as PetBagListItem;
         this._curretItem.isSelect = true;
         this.showPetInfo(this._curretItem.info);
      }
      
      private function init() : void
      {
         var _loc5_:PetBagListItem = null;
         var _loc6_:PetInfo = null;
         var _loc7_:PetBagListItem = null;
         this._curretItem = null;
         var _loc1_:int = 0;
         while(_loc1_ < LIST_LENGTH)
         {
            (_loc5_ = this._listCon.getChildAt(_loc1_) as PetBagListItem).mouseEnabled = false;
            _loc5_.hide();
            _loc5_.removeEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc1_++;
         }
         var _loc2_:Array = PetManager.infos;
         var _loc3_:int = Math.min(LIST_LENGTH,_loc2_.length);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc6_ = _loc2_[_loc4_] as PetInfo;
            (_loc7_ = this._listCon.getChildAt(_loc4_) as PetBagListItem).show(_loc6_);
            _loc7_.name = _loc6_.id.toString();
            _loc7_.filters = [];
            _loc7_.buttonMode = true;
            _loc7_.mouseEnabled = true;
            _loc7_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            this.checkPetListState(_loc6_,_loc7_);
            _loc4_++;
         }
      }
      
      private function checkPetListState(param1:PetInfo, param2:PetBagListItem) : void
      {
         if(this._selectList != null)
         {
            if(this._selectList.indexOf(param1.id) == -1)
            {
               this.unEableChoose(param2);
            }
         }
         if(this._isHigh)
         {
            if(param1.level < 50)
            {
               this.unEableChoose(param2);
            }
         }
      }
      
      private function unEableChoose(param1:PetBagListItem) : void
      {
         param1.filters = [ColorFilter.setGrayscale()];
         param1.mouseEnabled = false;
         param1.buttonMode = false;
         param1.removeEventListener(MouseEvent.CLICK,this.onItemClick);
      }
      
      private function showPanel() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.init();
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
      }
      
      private function onUpDate(param1:PetEvent) : void
      {
         this.reItem();
      }
      
      private function reItem() : void
      {
         var _loc5_:PetBagListItem = null;
         var _loc6_:PetInfo = null;
         var _loc7_:PetBagListItem = null;
         this._curretItem = null;
         var _loc1_:int = 0;
         while(_loc1_ < LIST_LENGTH)
         {
            (_loc5_ = this._listCon.getChildAt(_loc1_) as PetBagListItem).mouseEnabled = false;
            _loc5_.hide();
            _loc5_.removeEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc1_++;
         }
         var _loc2_:Array = PetManager.infos;
         var _loc3_:int = Math.min(LIST_LENGTH,_loc2_.length);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc6_ = _loc2_[_loc4_] as PetInfo;
            (_loc7_ = this._listCon.getChildAt(_loc4_) as PetBagListItem).show(_loc6_);
            _loc7_.name = _loc6_.id.toString();
            _loc7_.filters = [];
            _loc7_.buttonMode = true;
            _loc7_.mouseEnabled = true;
            _loc7_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc4_++;
         }
      }
      
      private function destory() : void
      {
         this.dispatchEvent(new PetBagEvent(PetBagEvent.CLOSE_PET_BAG));
         this.removeEvent();
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
         this._listCon = null;
         this._chooseBtn = null;
         this._curretItem = null;
         this._dragBtn = null;
         if(this._infoMC.data["isShow"])
         {
            DisplayUtil.removeForParent(this._infoMC);
         }
         this._infoClose.removeEventListener(MouseEvent.CLICK,this.onMouseInfoClose);
         this._infoClose = null;
         delete this._infoMC.data["isShow"];
         this._infoMC = null;
      }
   }
}
