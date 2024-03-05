package com.robot.app.task.petstory.app
{
   import com.robot.app.task.petstory.app.syllabus.SyllabusBtn;
   import com.robot.app.task.petstory.app.syllabus.SyllabusCell;
   import com.robot.app.task.petstory.app.syllabus.SyllabusDayBtn;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class SyllabusPanel
   {
      
      private static const K:uint = 1;
      
      private static var _instance:com.robot.app.task.petstory.app.SyllabusPanel;
       
      
      private const PATH:String = ClientConfig.getResPath("module/ext/app/syllabus.swf");
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _type:uint;
      
      private var _minCloseBtn:SimpleButton;
      
      private var _shineMC:MovieClip;
      
      private var _startBtn:SimpleButton;
      
      private var _cellsList:Array;
      
      private var _primaryList:Array;
      
      private var _titleList:Array;
      
      private var _dayGroup:Array;
      
      private var _currentCell:SyllabusCell;
      
      private var _days:uint;
      
      private var _catchTime:uint;
      
      private var _btnList:Array;
      
      public function SyllabusPanel()
      {
         this._cellsList = [];
         this._primaryList = [2,5,8,11,14,17,20];
         this._dayGroup = [];
         this._btnList = [];
         super();
         this.loadPanel();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.app.SyllabusPanel
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.app.SyllabusPanel();
         }
         return _instance;
      }
      
      public function setData(param1:Array, param2:uint = 1, param3:uint = 0) : void
      {
         this._titleList = param1;
         this._type = param2;
         this._catchTime = param3;
         this.showPanel();
      }
      
      private function loadPanel() : void
      {
         this._loader = new MCLoader(this.PATH,LevelManager.topLevel,1,"正在加载课程表");
         this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._loader.doLoad();
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("Syllabus_UI") as Class)() as MovieClip;
         this._minCloseBtn = new (this._app.getDefinition("MinCloseBtn") as Class)() as SimpleButton;
         this._shineMC = new (this._app.getDefinition("ShineMC") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._startBtn = this._mainUI["startBtn"];
         this._startBtn.addEventListener(MouseEvent.CLICK,this.onMosueStart);
         this._mainUI["double_ex_btn"].addEventListener(MouseEvent.CLICK,this.onDoubleExBtnClick);
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.initMC();
         this.showPanel();
      }
      
      private function onDoubleExBtnClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DoubleExperiencePanle"));
      }
      
      public function showPanel() : void
      {
         var loc_1:SyllabusDayBtn = null;
         if(this._mainUI)
         {
            DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
            LevelManager.appLevel.addChild(this._mainUI);
            this._mainUI.width /= 10;
            this._mainUI.height /= 10;
            this._mainUI.alpha = 0.2;
            TweenLite.to(this._mainUI,1.5,{
               "width":this._mainUI.width * 10,
               "height":this._mainUI.height * 10,
               "alpha":1,
               "onComplete":function():void
               {
               }
            });
            LevelManager.closeMouseEvent();
            this._days = 0;
            loc_1 = this._dayGroup[0] as SyllabusDayBtn;
            loc_1.lightBtn();
            this.recoverDaysBtn(loc_1);
            this.resetTitles();
            this.clearAllCell();
            this.resetCells(0);
            this.autoFocusNext();
         }
      }
      
      private function initMC() : void
      {
         this.initDays();
         this.initCells();
         this.initTitles();
      }
      
      private function initDays() : void
      {
         var _loc1_:SyllabusDayBtn = null;
         var _loc2_:uint = 0;
         while(_loc2_ <= 6)
         {
            _loc1_ = new SyllabusDayBtn(this._mainUI["day_" + _loc2_],_loc2_);
            _loc1_.addEventListener(MouseEvent.CLICK,this.onMosueDay);
            this._dayGroup.push(_loc1_);
            _loc2_++;
         }
      }
      
      private function initCells() : void
      {
         var _loc1_:SyllabusCell = null;
         var _loc2_:uint = 0;
         while(_loc2_ <= 20)
         {
            _loc1_ = new SyllabusCell(this._mainUI["cell_" + _loc2_],this._shineMC,this._app);
            _loc1_.addEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDownCell);
            _loc1_.addEventListener(MouseEvent.CLICK,this.onClickMiniClose);
            _loc1_.Id = _loc2_;
            this._cellsList.push(_loc1_);
            _loc2_++;
         }
         this.checkCondition();
      }
      
      private function initTitles() : void
      {
         var _loc5_:SyllabusBtn = null;
         var _loc1_:Object = this._titleList[this._type - 1];
         var _loc2_:Array = _loc1_.titleList;
         var _loc3_:Array = _loc1_.iconList;
         var _loc4_:Array = _loc1_.nameList;
         var _loc6_:uint = 0;
         while(_loc6_ <= 6)
         {
            (_loc5_ = new SyllabusBtn(this._mainUI["btn_" + _loc6_],this._app,_loc2_[_loc6_],_loc3_[_loc6_],_loc4_[_loc6_])).addEventListener(MouseEvent.CLICK,this.onMouseTitle);
            this._btnList.push(_loc5_);
            _loc6_++;
         }
      }
      
      private function resetTitles() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this._btnList.length)
         {
            if(this._btnList[_loc1_] is SyllabusBtn)
            {
               (this._btnList[_loc1_] as SyllabusBtn).clear();
               DisplayUtil.removeForParent(this._btnList[_loc1_]);
            }
            _loc1_++;
         }
         this._btnList.splice(0);
         this.initTitles();
      }
      
      private function onMouseTitle(param1:MouseEvent) : void
      {
         var _loc2_:SyllabusBtn = param1.currentTarget as SyllabusBtn;
         if(_loc2_)
         {
            if(this._currentCell)
            {
               this._currentCell.setcontext(_loc2_.getTitleName(),_loc2_.getTitleId());
               this._currentCell = null;
               this.autoFocusNext();
            }
            else
            {
               DebugTrace.show("没有焦点或者当前焦点已填满!");
            }
            DebugTrace.show("name：" + _loc2_.getTitleName() + "id:" + _loc2_.getTitleId());
         }
      }
      
      private function onMouseDownCell(param1:MouseEvent) : void
      {
         var _loc2_:SyllabusCell = param1.currentTarget as SyllabusCell;
         if(_loc2_)
         {
            this._currentCell = _loc2_;
         }
      }
      
      private function onClickMiniClose(param1:MouseEvent) : void
      {
         this.autoFocusNext();
      }
      
      private function onMosueStart(param1:MouseEvent) : void
      {
         var _loc2_:ByteArray = null;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:Array = null;
         var _loc6_:uint = 0;
         if(this.isCellsFull())
         {
            _loc2_ = new ByteArray();
            _loc2_.writeUnsignedInt(this._catchTime);
            _loc3_ = uint(this._type + 1);
            _loc2_.writeByte(_loc3_);
            _loc4_ = uint(this._days + 1);
            _loc2_.writeByte(_loc4_);
            _loc5_ = this.selectClassList();
            _loc6_ = 0;
            while(_loc6_ < _loc5_.length)
            {
               _loc2_.writeByte(_loc5_[_loc6_]);
               _loc6_++;
            }
            DebugTrace.show("当前课表:" + this._catchTime + "," + _loc3_ + "," + _loc4_ + "," + _loc5_);
            this.onCloseBtn(new MouseEvent(MouseEvent.CLICK));
            SocketConnection.addCmdListener(CommandID.ASK_PET_CLASS,this.onAskPetClass);
            SocketConnection.send(CommandID.ASK_PET_CLASS,_loc2_);
         }
         else
         {
            Alarm.show("需要选完所有课程才可以让精灵开始上课哦！");
         }
      }
      
      private function onAskPetClass(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ASK_PET_CLASS,this.onAskPetClass);
         PetManager.remove(this._catchTime);
         var _loc2_:PetVisitPanel = new PetVisitPanel(this._titleList);
      }
      
      private function onMosueDay(param1:MouseEvent) : void
      {
         var _loc2_:SyllabusDayBtn = param1.currentTarget as SyllabusDayBtn;
         if(_loc2_)
         {
            this.recoverDaysBtn(_loc2_);
            this.clearAllCell();
            this.resetCells(_loc2_.getDayIndex());
            this._days = _loc2_.getDayIndex();
            this.autoFocusNext();
            DebugTrace.show("dayIndex：" + _loc2_.getDayIndex());
         }
      }
      
      private function checkCondition() : void
      {
         if(this._type == 1)
         {
            this.removePrimary();
         }
      }
      
      private function removePrimary() : void
      {
         var _loc2_:uint = 0;
         var _loc1_:uint = 0;
         while(_loc1_ < this._primaryList.length)
         {
            _loc2_ = 0;
            while(_loc2_ < this._cellsList.length)
            {
               if(this._primaryList[_loc1_] == (this._cellsList[_loc2_] as SyllabusCell).Id)
               {
                  (this._cellsList[_loc2_] as SyllabusCell).enable = false;
               }
               _loc2_++;
            }
            _loc1_++;
         }
      }
      
      private function recoverDaysBtn(param1:SyllabusDayBtn) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this._dayGroup.length)
         {
            if(this._dayGroup[_loc2_] != param1)
            {
               (this._dayGroup[_loc2_] as SyllabusDayBtn).recoverBtn();
            }
            _loc2_++;
         }
      }
      
      private function clearAllCell() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this._cellsList.length)
         {
            (this._cellsList[_loc1_] as SyllabusCell).clear();
            _loc1_++;
         }
      }
      
      private function resetCells(param1:uint) : void
      {
         var _loc2_:uint = uint(param1 + 1);
         var _loc3_:uint = _loc2_ * 3 - 1;
         var _loc4_:uint = 0;
         while(_loc4_ < this._cellsList.length)
         {
            if(_loc4_ <= _loc3_)
            {
               (this._cellsList[_loc4_] as SyllabusCell).enable = true;
            }
            else
            {
               (this._cellsList[_loc4_] as SyllabusCell).enable = false;
            }
            _loc4_++;
         }
         this.checkCondition();
         this._currentCell = null;
      }
      
      private function autoFocusNext() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this._cellsList.length)
         {
            if((this._cellsList[_loc1_] as SyllabusCell).enable)
            {
               if((this._cellsList[_loc1_] as SyllabusCell).sId == 0)
               {
                  (this._cellsList[_loc1_] as SyllabusCell).showShine();
                  this._currentCell = this._cellsList[_loc1_] as SyllabusCell;
                  break;
               }
            }
            _loc1_++;
         }
      }
      
      private function isCellsFull() : Boolean
      {
         var _loc1_:Boolean = true;
         var _loc2_:uint = 0;
         while(_loc2_ < this._cellsList.length)
         {
            if((this._cellsList[_loc2_] as SyllabusCell).enable)
            {
               if((this._cellsList[_loc2_] as SyllabusCell).sId == 0)
               {
                  _loc1_ = false;
                  break;
               }
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      private function selectClassList() : Array
      {
         var _loc1_:Array = new Array();
         var _loc2_:uint = 0;
         while(_loc2_ < this._cellsList.length)
         {
            if((this._cellsList[_loc2_] as SyllabusCell).enable)
            {
               _loc1_.push((this._cellsList[_loc2_] as SyllabusCell).sId);
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
         this._minCloseBtn = null;
         this._shineMC = null;
         this._startBtn.removeEventListener(MouseEvent.CLICK,this.onMosueStart);
         this._mainUI["double_ex_btn"].removeEventListener(MouseEvent.CLICK,this.onDoubleExBtnClick);
         this._startBtn = null;
         this._cellsList = null;
         this._primaryList = null;
         this._dayGroup = null;
         this._currentCell = null;
      }
   }
}
