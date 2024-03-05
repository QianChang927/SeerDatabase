package com.robot.app.task.petstory.app.ship
{
   import com.robot.app.task.detectShip.DetectShipCtrl;
   import com.robot.app.task.detectShip.DetectShipManager;
   import com.robot.app.task.detectShip.ShipBackItemInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.utils.setTimeout;
   import org.taomee.effect.ColorFilter;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class DetectorPanel
   {
      
      private static var _instance:com.robot.app.task.petstory.app.ship.DetectorPanel;
      
      public static var isShow:Boolean = false;
      
      public static var openCells:uint;
      
      public static var isOver:Boolean = false;
       
      
      private const PATH:String = "resource/module/ext/app/detect.swf";
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _movieList:Array;
      
      private var _recyBtn:SimpleButton;
      
      private var _itemList:Array;
      
      private var _start:Boolean = false;
      
      public function DetectorPanel(param1:PrivateClass)
      {
         this._movieList = [];
         this._itemList = [];
         super();
         this.loadPanel();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.app.ship.DetectorPanel
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.app.ship.DetectorPanel(new PrivateClass());
         }
         return _instance;
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.appLevel,1,"正在加载探测仪");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
         DetectShipManager.existDetectorPanel = true;
      }
      
      public function setLeftTime(param1:uint) : void
      {
         if(this._mainUI)
         {
            this._mainUI["txt"].text = String(param1);
         }
         if(this._start == false)
         {
            this._start = true;
            this.show();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("DetectorUI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._recyBtn = this._mainUI["backBtn"];
         this._recyBtn.mouseEnabled = false;
         this._recyBtn.filters = [ColorFilter.setGrayscale()];
         this._recyBtn.addEventListener(MouseEvent.CLICK,this.onMouseRecy);
         this._movieList.push(this._mainUI["mc_0"],this._mainUI["mc_1"],this._mainUI["mc_2"]);
         this._itemList.push(this._mainUI["item_0"],this._mainUI["item_1"],this._mainUI["item_2"],this._mainUI["item_3"]);
         setTimeout(this.initShow,2000);
      }
      
      private function initShow() : void
      {
         if(this._start == false)
         {
            this._start = true;
            this.show();
         }
      }
      
      private function show() : void
      {
         isShow = true;
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         this.initMC();
      }
      
      private function initMC() : void
      {
         this.activeItem();
         if(isOver)
         {
            this.isActiveBtn();
            isOver = false;
         }
      }
      
      public function activeItem() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:MovieClip = null;
         while(_loc1_ < openCells)
         {
            _loc2_ = this._mainUI["item_" + _loc1_];
            _loc2_.gotoAndStop(3);
            _loc1_++;
         }
      }
      
      private function onMouseRecy(param1:MouseEvent) : void
      {
         this.onCloseBtn(new MouseEvent(MouseEvent.CLICK));
      }
      
      private function onGetBackItem(param1:ShipBackItemInfo) : void
      {
         var index:uint = 0;
         var info:ShipBackItemInfo = param1;
         var loadIcon:Function = function():void
         {
            var ob:Object = null;
            ob = info.itemList.shift();
            if(ob)
            {
               ResourceManager.getResource(ItemXMLInfo.getIconURL(ob["itemID"]),function(param1:DisplayObject):void
               {
                  var mc:MovieClip = null;
                  var o:DisplayObject = param1;
                  mc = _mainUI["item_" + index];
                  KTool.getFrameMc(mc,3,"",function(param1:DisplayObject):void
                  {
                     var _loc2_:MovieClip = param1 as MovieClip;
                     _loc2_.visible = false;
                  });
                  if(mc)
                  {
                     mc.addChild(o);
                     ToolTipManager.add(mc,ItemXMLInfo.getName(ob["itemID"]));
                     o.x = 20;
                     o.y = 10;
                     mc["txt"].text = ob["itemCnt"].toString();
                  }
                  ++index;
                  if(info.itemList.length)
                  {
                     loadIcon();
                  }
               });
            }
         };
         DetectShipCtrl.status = 0;
         index = 0;
         loadIcon();
      }
      
      public function isActiveBtn() : void
      {
         this._recyBtn.mouseEnabled = true;
         this._recyBtn.filters = [];
         DetectShipManager.getShipBackItemInfo(this.onGetBackItem);
         this._closeBtn.visible = false;
         if(this._mainUI)
         {
            this._mainUI["txt"].text = "0";
         }
      }
      
      public function refreshItems(param1:uint) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:MovieClip = null;
         while(_loc2_ < param1)
         {
            _loc3_ = this._mainUI["item_" + _loc2_];
            _loc3_.gotoAndStop(2);
            _loc2_++;
         }
      }
      
      private function onCloseBtn(param1:MouseEvent = null) : void
      {
         isShow = false;
         DisplayUtil.removeForParent(this._mainUI,false);
         this.destory();
         DetectShipManager.existDetectorPanel = false;
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
         this._movieList = null;
         this._recyBtn.removeEventListener(MouseEvent.CLICK,this.onMouseRecy);
         this._recyBtn = null;
         this._itemList = null;
         _instance = null;
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
