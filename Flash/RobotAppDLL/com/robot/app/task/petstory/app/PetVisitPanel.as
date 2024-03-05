package com.robot.app.task.petstory.app
{
   import com.robot.app.mapProcess.MapProcess_485;
   import com.robot.app.task.petstory.app.train.TrainData;
   import com.robot.app.task.petstory.app.visit.AbstractCell;
   import com.robot.app.task.petstory.app.visit.AddPetBtn;
   import com.robot.app.task.petstory.app.visit.PetShowCell;
   import com.robot.app.task.petstory.evt.ItemSelectEvent;
   import com.robot.app.task.petstory.evt.PetBagEvent;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class PetVisitPanel
   {
       
      
      private const PATH:String = ClientConfig.getResPath("module/ext/app/visit.swf");
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _offX:Number = 17;
      
      private var _offY:Number = 55;
      
      private var _maxMonNum:uint;
      
      private var _currMonNum:uint;
      
      private var _petInfoList:Array;
      
      private var _titleList:Array;
      
      private var _petId:uint;
      
      private var _captTime:uint;
      
      private var _cellList:Array;
      
      private var _isFinish:Boolean = false;
      
      public function PetVisitPanel(param1:Array)
      {
         this._petInfoList = [];
         this._cellList = [];
         super();
         this._titleList = param1;
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.topLevel,1,"正在加载宠物探望面板");
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
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("PetVisit_UI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.showPanel();
      }
      
      private function showPanel() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.initMC();
      }
      
      private function initMC() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_INFO_CLASS,this.onGetInfo);
         SocketConnection.send(CommandID.GET_INFO_CLASS);
      }
      
      private function onGetInfo(param1:SocketEvent) : void
      {
         var _loc3_:Object = null;
         SocketConnection.removeCmdListener(CommandID.GET_INFO_CLASS,this.onGetInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._maxMonNum = _loc2_.readUnsignedInt();
         this._currMonNum = _loc2_.readUnsignedInt();
         this._petInfoList.splice(0);
         var _loc4_:uint = 1;
         while(_loc4_ <= this._currMonNum)
         {
            _loc3_ = new Object();
            _loc3_.captime = _loc2_.readUnsignedInt();
            _loc3_.monId = _loc2_.readUnsignedInt();
            _loc3_.lastTime = _loc2_.readUnsignedInt();
            _loc3_.type = _loc2_.readByte();
            _loc3_.day = _loc2_.readByte();
            this._petInfoList.push(_loc3_);
            _loc4_++;
         }
         this._petInfoList.sortOn("lastTime",Array.NUMERIC);
         this.initCells();
      }
      
      private function initCells() : void
      {
         var _loc2_:AbstractCell = null;
         this.clearAllCells();
         var _loc1_:uint = 0;
         while(_loc1_ < 8)
         {
            if(this._petInfoList[_loc1_])
            {
               _loc2_ = new PetShowCell(this._app,this._petInfoList[_loc1_]);
            }
            else
            {
               _loc2_ = new AddPetBtn(this._app);
            }
            _loc2_.addEventListener(ItemSelectEvent.SELECT_ITEM,this.onMouseCell);
            _loc2_.y += int(_loc1_ / 4) * (130 + 10) + this._offY;
            _loc2_.x += int(_loc1_ % 4) * (160 + 10) + this._offX;
            if(_loc1_ > 3)
            {
               if(MainManager.actorInfo.superNono)
               {
                  _loc2_.enable = true;
               }
               else
               {
                  _loc2_.enable = false;
                  _loc2_.removeEventListener(ItemSelectEvent.SELECT_ITEM,this.onMouseCell);
               }
            }
            this._cellList.push(_loc2_);
            this._mainUI.addChild(_loc2_);
            _loc1_++;
         }
      }
      
      private function clearAllCells() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ < this._cellList.length)
         {
            if(this._cellList[_loc1_] as AbstractCell)
            {
               DisplayUtil.removeForParent(this._cellList[_loc1_]);
            }
            _loc1_++;
         }
         this._cellList.splice(0);
      }
      
      private function onMouseCell(param1:ItemSelectEvent) : void
      {
         var pb:PetBagPanel = null;
         var e:ItemSelectEvent = param1;
         var loc_1:AbstractCell = e.currentTarget as AbstractCell;
         if(loc_1)
         {
            if(loc_1 is PetShowCell)
            {
               this._petId = (loc_1 as PetShowCell).getPetId();
               this._captTime = (loc_1 as PetShowCell).getCapTime();
               this._isFinish = (loc_1 as PetShowCell).getFinish();
               if(this._isFinish)
               {
                  SocketConnection.sendByQueue(CommandID.GET_PET_CLASS,[this._captTime],this.onGetPetBack,function(param1:*):void
                  {
                     SocketConnection.send(40006,1);
                  });
               }
               else
               {
                  Alert.show("精灵还未完成所有课程，如果中途放弃课程，会让之前的训练也大打折扣哦，确定要放弃吗？",function():void
                  {
                     SocketConnection.sendByQueue(CommandID.GET_PET_CLASS,[_captTime],onGetPetBack,function(param1:*):void
                     {
                        SocketConnection.send(40006,1);
                     });
                  });
               }
            }
            else if(loc_1 is AddPetBtn)
            {
               EventManager.addEventListener(PetBagPanel.PET_CHOOSE,this.getMainSpriteData);
               if(TrainData.isHigh)
               {
                  pb = new PetBagPanel(2,true);
               }
               else
               {
                  pb = new PetBagPanel(3);
               }
               pb.addEventListener(PetBagEvent.CLOSE_PET_BAG,this.onMosueDestory);
               this.onCloseBtn(new MouseEvent(MouseEvent.CLICK));
            }
         }
      }
      
      private function onMosueDestory(param1:PetBagEvent) : void
      {
         param1.currentTarget.removeEventListener(PetBagEvent.CLOSE_PET_BAG,this.onMosueDestory);
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,this.getMainSpriteData);
      }
      
      private function onGetPetBack(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_PET_CLASS,this.onGetPetBack);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Object = new Object();
         _loc3_.captTime = _loc2_.readUnsignedInt();
         _loc3_.monId = _loc2_.readUnsignedInt();
         _loc3_.event = _loc2_.readUnsignedInt();
         _loc3_.gainExp = _loc2_.readUnsignedInt();
         _loc3_.hp = _loc2_.readUnsignedInt();
         _loc3_.atk = _loc2_.readUnsignedInt();
         _loc3_.def = _loc2_.readUnsignedInt();
         _loc3_.sp_atk = _loc2_.readUnsignedInt();
         _loc3_.sp_def = _loc2_.readUnsignedInt();
         _loc3_.speed = _loc2_.readUnsignedInt();
         _loc3_.up = _loc2_.readUnsignedInt();
         _loc3_.addExp = _loc2_.readUnsignedInt();
         _loc3_.titleList = this._titleList;
         var _loc4_:ScorePanel = new ScorePanel(_loc3_);
         GetPetController.getPet(this._petId,this._captTime);
         this.initMC();
         if(this._isFinish)
         {
            if(Math.random() < 0.05)
            {
               MapProcess_485._isActive = true;
            }
         }
      }
      
      private function getMainSpriteData(param1:DynamicEvent) : void
      {
         EventManager.removeEventListener(PetBagPanel.PET_CHOOSE,this.getMainSpriteData);
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(_loc2_)
         {
            if(TrainData.isHigh)
            {
               SyllabusPanel.getInstance().setData(this._titleList,2,_loc2_.catchTime);
            }
            else
            {
               SyllabusPanel.getInstance().setData(this._titleList,1,_loc2_.catchTime);
            }
         }
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
         MapProcess_485.onPanelClose();
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
      }
   }
}
