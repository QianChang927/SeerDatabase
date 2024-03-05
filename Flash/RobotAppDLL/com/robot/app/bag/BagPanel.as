package com.robot.app.bag
{
   import com.robot.app.action.ActorActionManager;
   import com.robot.app.team.TeamController;
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeClothBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.MountManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.teamInstallation.TeamLogo;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.ItemType;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.filters.DropShadowFilter;
   import flash.system.ApplicationDomain;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class BagPanel extends Sprite
   {
      
      public static const PREV_PAGE:String = "prevPage";
      
      public static const NEXT_PAGE:String = "nextPage";
      
      public static const SHOW_CLOTH:String = "showCloth";
      
      public static const SHOW_COLLECTION:String = "showCollection";
      
      public static const SHOW_NONO:String = "showNoNo";
      
      public static const SHOW_SOULBEAD:String = "showSoulBead";
      
      public static var justOpen:Boolean;
      
      public static var suitID:uint = 0;
      
      public static var currTab:uint = BagTabType.CLOTH;
      
      public static var oldCloths:Array = [];
      
      public static var newCloths:Array = [];
       
      
      private var UI_PATH:String;
      
      private var _bagUI:MovieClip;
      
      private var _appDomain:ApplicationDomain;
      
      private var _clothBtn:MovieClip;
      
      private var _collectionBtn:MovieClip;
      
      private var _nonoBtn:MovieClip;
      
      private var _soulBeadBtn:MovieClip;
      
      private var _typeBtnList:Array;
      
      private var _typeBtnTips:Array;
      
      private var _typeBtn:MovieClip;
      
      private var _sortBtn:SimpleButton;
      
      private var _mountBtn:SimpleButton;
      
      private var _typePanel:com.robot.app.bag.BagTypePanel;
      
      private var _isShowTypePanel:Boolean = false;
      
      private var _listCon:Sprite;
      
      private var _clickItemID:uint;
      
      private var _showMc:Sprite;
      
      private var _clothPrev:com.robot.app.bag.BagClothPreview;
      
      private var _teamLogo:TeamLogo;
      
      private var _instuctorLogo:MovieClip;
      
      private var _changeNick:com.robot.app.bag.ChangeNickName;
      
      private var _filter:DropShadowFilter;
      
      private var _curClothType:uint;
      
      public function BagPanel()
      {
         this.UI_PATH = ClientConfig.getResPath("module/bag/newBagUI.swf");
         this._typeBtnList = [];
         this._typeBtnTips = ["装备部件","收藏物品","超能NoNo","精灵元神珠"];
         this._filter = new DropShadowFilter(2,45,0,0.6);
         super();
      }
      
      public function show(param1:uint = 0) : void
      {
         var _loc2_:MCLoader = null;
         justOpen = true;
         this._curClothType = param1;
         LevelManager.appLevel.addChild(this);
         if(this._bagUI == null)
         {
            _loc2_ = new MCLoader(this.UI_PATH,LevelManager.appLevel,1,"正在加载储存箱....");
            _loc2_.addEventListener(MCLoadEvent.SUCCESS,this.onLoad);
            _loc2_.doLoad();
         }
         else
         {
            this.init();
         }
      }
      
      private function onLoad(param1:MCLoadEvent) : void
      {
         var _loc3_:int = 0;
         var _loc5_:BagListItem = null;
         var _loc6_:MovieClip = null;
         this._appDomain = param1.getApplicationDomain();
         var _loc2_:MCLoader = param1.currentTarget as MCLoader;
         _loc2_.removeEventListener(MCLoadEvent.SUCCESS,this.onLoad);
         _loc2_.clear();
         this._bagUI = new (this._appDomain.getDefinition("bag_ui") as Class)() as MovieClip;
         addChild(this._bagUI);
         DisplayUtil.align(this,null,AlignType.MIDDLE_CENTER);
         this._listCon = new Sprite();
         this._listCon.x = 313;
         this._listCon.y = 38;
         this._bagUI.addChild(this._listCon);
         _loc3_ = 0;
         while(_loc3_ < 12)
         {
            _loc5_ = new BagListItem(new (this._appDomain.getDefinition("item_ui") as Class)() as Sprite);
            _loc5_.x = (_loc5_.width + 10) * int(_loc3_ % 3);
            _loc5_.y = (_loc5_.height + 5) * int(_loc3_ / 3);
            this._listCon.addChild(_loc5_);
            _loc3_++;
         }
         this._bagUI["dragBtn"].addEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._bagUI["dragBtn"].addEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         this._bagUI["prev_btn"].addEventListener(MouseEvent.CLICK,this.prevHandler);
         this._bagUI["next_btn"].addEventListener(MouseEvent.CLICK,this.nextHandler);
         this._bagUI["closeBtn"].addEventListener(MouseEvent.CLICK,this.onClose);
         this._typeBtn = this._bagUI["typeBtn"];
         this._typeBtn.buttonMode = true;
         this._typeBtn.mouseChildren = false;
         this._typeBtn.addEventListener(MouseEvent.CLICK,this.onTypeClick);
         this._showMc = UIManager.getSprite("ComposeMC");
         this._showMc.scaleX = this._showMc.scaleY = 0.9;
         this._showMc.x = 80;
         this._showMc.y = 102;
         this._bagUI.addChild(this._showMc);
         this._clothPrev = new com.robot.app.bag.BagClothPreview(this._showMc,null,ClothPreview.MODEL_SHOW);
         this._clothBtn = this._bagUI["clothBtn"];
         this._collectionBtn = this._bagUI["collectionBtn"];
         this._nonoBtn = this._bagUI["nonoBtn"];
         this._soulBeadBtn = this._bagUI["soulBeadBtn"];
         this._typeBtnList = [this._clothBtn,this._collectionBtn,this._nonoBtn,this._soulBeadBtn];
         var _loc4_:uint = 0;
         while(_loc4_ < this._typeBtnList.length)
         {
            (_loc6_ = this._typeBtnList[_loc4_]).buttonMode = true;
            _loc6_.addEventListener(MouseEvent.CLICK,this.onClickTypeBtn);
            ToolTipManager.add(_loc6_,this._typeBtnTips[_loc4_]);
            _loc4_++;
         }
         ToolTipManager.add(this._bagUI["goldMc"],"钻石库存最多为3000个，当您领取免费钻石时请确保当时钻石库存低于此限制！");
         ToolTipManager.add(this._bagUI["coinMc"],"赛尔豆");
         this._sortBtn = this._bagUI["sort"];
         this._sortBtn.filters = [this._filter];
         this._sortBtn.addEventListener(MouseEvent.CLICK,this.onClickSort);
         ToolTipManager.add(this._sortBtn,"整理储存箱");
         this._mountBtn = this._bagUI["mount"];
         this._mountBtn.filters = [this._filter];
         this._mountBtn.addEventListener(MouseEvent.CLICK,this.onClickMount);
         ToolTipManager.add(this._mountBtn,"取消星际座驾");
         addChild(this._mountBtn);
         this._instuctorLogo = UIManager.getMovieClip("Teacher_Icon");
         this._instuctorLogo.x = 38;
         this._instuctorLogo.y = 254;
         this._instuctorLogo.filters = [this._filter];
         this._teamLogo = new TeamLogo();
         this._teamLogo.buttonMode = true;
         this._teamLogo.scaleX = this._teamLogo.scaleY = 0.8;
         this._teamLogo.x = 28;
         this._teamLogo.y = 78;
         this._teamLogo.filters = [this._filter];
         this._teamLogo.addEventListener(MouseEvent.CLICK,this.showTeamInfo);
         ToolTipManager.add(this._teamLogo,"进入战队要塞");
         this.init();
      }
      
      private function onDragDown(param1:MouseEvent) : void
      {
         if(parent)
         {
            parent.addChild(this);
         }
         startDrag();
      }
      
      private function onDragUp(param1:MouseEvent) : void
      {
         stopDrag();
      }
      
      private function prevHandler(param1:MouseEvent) : void
      {
         dispatchEvent(new Event(PREV_PAGE));
      }
      
      private function nextHandler(param1:MouseEvent) : void
      {
         dispatchEvent(new Event(NEXT_PAGE));
      }
      
      private function onClose(param1:MouseEvent = null) : void
      {
         this.hide();
         dispatchEvent(new Event(Event.CLOSE));
      }
      
      private function onClickSort(param1:Event) : void
      {
         BagController.model.sortList();
         this.showItem(BagController.model.pageArray);
      }
      
      private function onClickMount(param1:Event) : void
      {
         MountManager.changeMount(0);
         CommonUI.setEnabled(this._mountBtn,false);
      }
      
      private function showTeamInfo(param1:MouseEvent) : void
      {
         TeamController.show(this._teamLogo.teamID);
      }
      
      private function onClickChNickBtn(param1:MouseEvent) : void
      {
         this.onClose();
         ModuleManager.showModule(ClientConfig.getAppModule("VipNickEditor"));
      }
      
      private function init() : void
      {
         this.goToCloth();
         this._clothPrev.changeColor(MainManager.actorInfo.color);
         this._clothPrev.showCloths(MainManager.actorInfo.clothes);
         this._clothPrev.showDoodle(MainManager.actorInfo.texture);
         if(MainManager.actorInfo.teamInfo.id != 0)
         {
            this.getTeamLogo();
         }
         if(MainManager.actorInfo.isCanBeTeacher)
         {
            this.getInstuctorLogo();
         }
         this._bagUI["nonoMc"].visible = false;
         this._bagUI["annualNonoMc"].visible = false;
         if(MainManager.actorInfo.isExtremeNono)
         {
            this._bagUI["annualNonoMc"].visible = true;
            ToolTipManager.add(this._bagUI["annualNonoMc"],"至尊NoNo");
         }
         else if(MainManager.actorInfo.isVip)
         {
            this._bagUI["nonoMc"].visible = true;
            this._bagUI["nonoMc"]["lv"].gotoAndStop(MainManager.actorInfo.vipLevel);
            ToolTipManager.add(this._bagUI["nonoMc"],MainManager.actorInfo.vipLevel + "级超能NoNo");
         }
         this._bagUI["chNickBtn"].addEventListener(MouseEvent.CLICK,this.onClickChNickBtn);
         this._bagUI["miId_txt"].text = "(" + MainManager.actorInfo.userID + ")";
         this._bagUI["money_txt"].text = MainManager.actorInfo.coins;
         this._bagUI["name_txt"].text = MainManager.actorInfo.nick;
         this.getGoldNum();
         if(MainManager.actorInfo.isVip)
         {
            CommonUI.setEnabled(this._nonoBtn,true);
         }
         else
         {
            CommonUI.setEnabled(this._nonoBtn,false);
         }
         if(MainManager.actorInfo.mountId == 0)
         {
            CommonUI.setEnabled(this._mountBtn,false);
         }
         else
         {
            CommonUI.setEnabled(this._mountBtn,true);
         }
         dispatchEvent(new Event(Event.COMPLETE));
      }
      
      private function getTeamLogo() : void
      {
         SocketConnection.addCmdListener(CommandID.TEAM_GET_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.TEAM_GET_INFO,arguments.callee);
            var _loc3_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
            _teamLogo.info = _loc3_;
            addChild(_teamLogo);
         });
         SocketConnection.send(CommandID.TEAM_GET_INFO,MainManager.actorInfo.teamInfo.id);
      }
      
      private function getInstuctorLogo() : void
      {
         var _loc1_:uint = uint(uint(MainManager.actorInfo.graduationCount / 5) + 1);
         if(_loc1_ > 6)
         {
            this._instuctorLogo.gotoAndStop(6);
         }
         else
         {
            this._instuctorLogo.gotoAndStop(_loc1_);
         }
         this._bagUI.addChild(this._instuctorLogo);
      }
      
      public function goToCloth() : void
      {
         currTab = BagTabType.CLOTH;
         BagShowType.currType = this._curClothType;
         this._typeBtn["txt"].text = BagShowType.typeNameList[BagShowType.currType];
         this.showTypeContent(this._clothBtn,true);
         dispatchEvent(new Event(SHOW_CLOTH));
      }
      
      private function getGoldNum() : void
      {
         SocketConnection.addCmdListener(CommandID.GOLD_CHECK_REMAIN,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GOLD_CHECK_REMAIN,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _bagUI["gold_txt"].text = (_loc3_.readUnsignedInt() / 100).toString();
         });
         SocketConnection.send(CommandID.GOLD_CHECK_REMAIN);
      }
      
      public function hide() : void
      {
         if(this._typePanel)
         {
            this.hideTypePanel();
         }
         ToolTipManager.remove(this._bagUI["annualNonoMc"]);
         ToolTipManager.remove(this._bagUI["nonoMc"]);
         oldCloths = MainManager.actorInfo.clothIDs;
         newCloths = this._clothPrev.getClothIDs();
         var _loc1_:String = String(this._clothPrev.getClothStr());
         var _loc2_:String = String(MainManager.actorClothStr);
         var _loc3_:Array = this._clothPrev.getClothArray();
         if(_loc1_ != _loc2_ && ActorActionManager.isTransforming == false)
         {
            MainManager.actorInfo.clothes = _loc3_;
            MainManager.actorModel.execBehavior(new ChangeClothBehavior(_loc3_));
         }
         DisplayUtil.removeForParent(this,false);
      }
      
      public function showItem(param1:Array) : void
      {
         var len:int;
         var i:int;
         var info:SingleItemInfo = null;
         var item:BagListItem = null;
         var hasPrev:Boolean = false;
         var data:Array = param1;
         this.clearItemPanel();
         len = int(data.length);
         i = 0;
         for(; i < len; i++)
         {
            info = data[i];
            item = this._listCon.getChildAt(i) as BagListItem;
            if(BagShowType.currType == BagShowType.SUIT)
            {
               if(ItemManager.containsCloth(info.itemID) == false)
               {
                  item.setInfo(info);
                  continue;
               }
            }
            hasPrev = false;
            if(BagShowType.currType == BagShowType.SUIT)
            {
               hasPrev = Boolean(this._clothPrev.getClothArray().some(function(param1:PeopleItemInfo, param2:int, param3:Array):Boolean
               {
                  if(param1.id == info.itemID)
                  {
                     return true;
                  }
                  return false;
               }));
            }
            item.setInfo(info,hasPrev);
            if(hasPrev == false)
            {
               if(info.leftTime != 0)
               {
                  if(info.type == ItemType.CLOTH)
                  {
                     item.buttonMode = true;
                     item.addEventListener(MouseEvent.CLICK,this.onChangeCloth);
                  }
               }
            }
            item.addEventListener(MouseEvent.ROLL_OVER,this.onShowItemInfo);
            item.addEventListener(MouseEvent.ROLL_OUT,this.onHideItemInfo);
         }
      }
      
      private function onClickTypeBtn(param1:MouseEvent = null) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         switch(_loc2_)
         {
            case this._clothBtn:
               currTab = BagTabType.CLOTH;
               BagShowType.currType = BagShowType.ALL;
               this._typeBtn["txt"].text = BagShowType.typeNameList[BagShowType.currType];
               this.showTypeContent(_loc2_,true);
               dispatchEvent(new Event(SHOW_CLOTH));
               break;
            case this._collectionBtn:
               currTab = BagTabType.COLLECTION;
               BagCollectType.currType = BagCollectType.ALL;
               this._typeBtn["txt"].text = BagCollectType.typeNameList[BagCollectType.currType];
               this.showTypeContent(_loc2_,true);
               dispatchEvent(new Event(SHOW_COLLECTION));
               break;
            case this._nonoBtn:
               if(MainManager.actorInfo.isVip == false)
               {
                  return;
               }
               currTab = BagTabType.NONO;
               BagShowType.currType = BagShowType.ALL;
               this._typeBtn["txt"].text = BagShowType.typeNameList[BagShowType.currType];
               this.showTypeContent(_loc2_,true);
               dispatchEvent(new Event(SHOW_NONO));
               break;
            case this._soulBeadBtn:
               currTab = BagTabType.SOULBEAD;
               BagShowType.currType = BagShowType.ALL;
               this._typeBtn["txt"].text = BagShowType.typeNameList[BagShowType.currType];
               this.showTypeContent(_loc2_,false);
               dispatchEvent(new Event(SHOW_SOULBEAD));
         }
         this._isShowTypePanel = false;
         this._typeBtn.gotoAndStop(1);
      }
      
      private function showTypeContent(param1:MovieClip, param2:Boolean = true) : void
      {
         var _loc3_:MovieClip = null;
         this.hideTypePanel();
         for each(_loc3_ in this._typeBtnList)
         {
            _loc3_.gotoAndStop(2);
            _loc3_.addEventListener(MouseEvent.CLICK,this.onClickTypeBtn);
         }
         param1.gotoAndStop(1);
         param1.removeEventListener(MouseEvent.CLICK,this.onClickTypeBtn);
         if(param2)
         {
            this._typeBtn.visible = true;
         }
         else
         {
            this._typeBtn.visible = false;
         }
      }
      
      public function showByTab() : void
      {
      }
      
      private function onTypeClick(param1:MouseEvent) : void
      {
         if(this._isShowTypePanel)
         {
            this.hideTypePanel();
            this._isShowTypePanel = false;
            this._typeBtn.gotoAndStop(1);
            return;
         }
         this._typePanel = new com.robot.app.bag.BagTypePanel(currTab,this._appDomain,this);
         this._typePanel.x = 363;
         this._typePanel.y = 25;
         addChild(this._typePanel);
         this._isShowTypePanel = true;
         this._typeBtn.gotoAndStop(2);
         switch(currTab)
         {
            case BagTabType.CLOTH:
            case BagTabType.NONO:
               this._typePanel.setSelect(BagShowType.currType);
               this._typePanel.addEventListener(BagTypeEvent.SELECT,this.onTypeSelect);
               break;
            case BagTabType.COLLECTION:
               this._typePanel.setSelect(BagCollectType.currType);
               this._typePanel.addEventListener(BagCollectTypeEvent.SELECT,this.onCollectTypeSelect);
         }
      }
      
      private function onTypeSelect(param1:BagTypeEvent) : void
      {
         this._typePanel.removeEventListener(BagTypeEvent.SELECT,this.onTypeSelect);
         this.hideTypePanel();
         this._isShowTypePanel = false;
         this._typeBtn.gotoAndStop(1);
         BagShowType.currType = param1.showType;
         BagShowType.currSuitID = param1.suitID;
         this._typeBtn["txt"].text = BagShowType.typeNameList[BagShowType.currType];
         dispatchEvent(new BagTypeEvent(BagTypeEvent.SELECT,param1.showType,param1.suitID));
      }
      
      private function onCollectTypeSelect(param1:BagCollectTypeEvent) : void
      {
         this._typePanel.removeEventListener(BagTypeEvent.SELECT,this.onCollectTypeSelect);
         this.hideTypePanel();
         this._isShowTypePanel = false;
         this._typeBtn.gotoAndStop(1);
         BagCollectType.currType = param1.showType;
         this._typeBtn["txt"].text = BagCollectType.typeNameList[BagCollectType.currType];
         dispatchEvent(new BagCollectTypeEvent(BagCollectTypeEvent.SELECT,param1.showType));
      }
      
      private function hideTypePanel() : void
      {
         if(this._typePanel)
         {
            DisplayUtil.removeForParent(this._typePanel);
            this._typePanel.destory();
            this._typePanel = null;
         }
      }
      
      private function onShowItemInfo(param1:MouseEvent) : void
      {
         var _loc2_:BagListItem = param1.currentTarget as BagListItem;
         if(_loc2_.info == null)
         {
            return;
         }
         this._clickItemID = _loc2_.info.itemID;
         ItemInfoTip.show(_loc2_.info);
      }
      
      private function onHideItemInfo(param1:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      private function clearItemPanel() : void
      {
         var _loc3_:BagListItem = null;
         var _loc1_:int = this._listCon.numChildren;
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = this._listCon.getChildAt(_loc2_) as BagListItem;
            _loc3_.clear();
            _loc3_.removeEventListener(MouseEvent.CLICK,this.onChangeCloth);
            _loc3_.removeEventListener(MouseEvent.ROLL_OVER,this.onShowItemInfo);
            _loc3_.removeEventListener(MouseEvent.ROLL_OUT,this.onHideItemInfo);
            _loc3_.buttonMode = false;
            _loc2_++;
         }
      }
      
      private function onChangeCloth(param1:MouseEvent) : void
      {
         var arr:Array = null;
         var array:Array = null;
         var i:uint = 0;
         var event:MouseEvent = param1;
         var item:BagListItem = event.currentTarget as BagListItem;
         if(item.info == null)
         {
            return;
         }
         ItemInfoTip.hide();
         this._clickItemID = item.info.itemID;
         if(BagShowType.currType == BagShowType.SUIT)
         {
            arr = SuitXMLInfo.getCloths(BagShowType.currSuitID).filter(function(param1:uint, param2:int, param3:Array):Boolean
            {
               if(ItemManager.containsCloth(param1))
               {
                  if(ItemManager.getClothInfo(param1).leftTime == 0)
                  {
                     return false;
                  }
                  return true;
               }
               return false;
            });
            array = [];
            for each(i in arr)
            {
               array.push(new PeopleItemInfo(i));
            }
            this._clothPrev.showCloths(array);
         }
         else if(ClothXMLInfo.getItemInfo(this._clickItemID).type == "mount")
         {
            MountManager.changeMount(this._clickItemID);
         }
         else
         {
            this._clothPrev.showCloth(this._clickItemID,item.info.itemLevel);
         }
      }
      
      public function setPageNum(param1:uint, param2:uint) : void
      {
         this._bagUI["page_txt"].text = param1 + "/" + param2;
      }
      
      public function get clothPrev() : com.robot.app.bag.BagClothPreview
      {
         return this._clothPrev;
      }
      
      public function get clickItemID() : uint
      {
         return this._clickItemID;
      }
   }
}
