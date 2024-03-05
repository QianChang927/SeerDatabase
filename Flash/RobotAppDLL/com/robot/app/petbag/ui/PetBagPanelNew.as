package com.robot.app.petbag.ui
{
   import com.robot.app.info.BulaikeEffectInfo;
   import com.robot.app.info.GaiyaEffectInfo;
   import com.robot.app.mapProcess.control.AngelEvilController;
   import com.robot.app.petbag.PetBagController;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.petbag.petPropsBag.PetBagModelNew;
   import com.robot.app.petbag.petPropsBag.ui.PetPropsPanelNew;
   import com.robot.app.picturebook.PictureBookController;
   import com.robot.app.task.books.MonsterBook;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.PetPropAddController;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.pet.PetGenderIconManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.effectTips.EffectInfoTips;
   import com.robot.core.ui.skillBtn.NormalSkillBtnNew;
   import com.robot.core.uic.UIPanel;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.net.URLRequest;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.StringUtil;
   
   public class PetBagPanelNew extends UIPanel
   {
      
      public static var _page:uint = 1;
      
      public static var isChangeSkillInBag:Boolean = false;
       
      
      public var _petList:Array;
      
      public var _focusIndex:int;
      
      private var _currentTab:uint;
      
      private var _winList:Array;
      
      private var _channel:SoundChannel;
      
      private var _sound:Sound;
      
      private var mc0:MovieClip;
      
      private var mc1:MovieClip;
      
      private var mc2:MovieClip;
      
      private var mc3:MovieClip;
      
      private var _skillBtnArray:Array;
      
      private var _petPropsPanel:PetPropsPanelNew;
      
      public var _petBagModel:PetBagModelNew;
      
      private var _petEffect:Sprite;
      
      private var _point:Point;
      
      private var isOpen:Boolean;
      
      private var isSave:Boolean;
      
      public function PetBagPanelNew()
      {
         this._petList = [];
         this._winList = ["PetInfo_UI","PetProperty_UI","PetItemOwned_UI","PetIntro_UI"];
         this._skillBtnArray = [];
         super(UIManager.getSprite("PetBagPanel_UI"));
         _canDrag = false;
      }
      
      public function show() : void
      {
         this.isOpen = true;
         _mainUI.visible = true;
         DisplayUtil.align(this,null,AlignType.MIDDLE_CENTER);
         PetManager.upDate(function():void
         {
            addEffectBg();
            setList(0);
            _mainUI["tab0"].gotoAndStop(3);
            addEvent();
            setButton();
            LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
            _show();
         });
      }
      
      private function addEffectBg() : void
      {
         var _loc1_:int = 0;
         var _loc2_:PetEffectIcon = null;
         DisplayUtil.removeAllChild(_mainUI["effect1"]);
         _loc1_ = 0;
         while(_loc1_ < 5)
         {
            _loc2_ = new PetEffectIcon();
            _loc2_.name = "icon" + _loc1_;
            _mainUI["effect1"].addChild(_loc2_);
            _loc2_.x = (_loc2_.width + 4) * _loc1_;
            _loc2_.y = 0;
            _loc1_++;
         }
      }
      
      private function showIcon(param1:Array) : void
      {
         var _loc2_:int = 0;
         var _loc3_:PetEffectIcon = null;
         _loc2_ = 0;
         while(_loc2_ < 5)
         {
            _loc3_ = _mainUI["effect1"].getChildByName("icon" + _loc2_) as PetEffectIcon;
            _loc3_.clear();
            if(_loc2_ < param1.length)
            {
               _loc3_.show(param1[_loc2_] as PetEffectInfo);
            }
            _loc2_++;
         }
      }
      
      override protected function addEvent() : void
      {
         var _loc1_:int = 0;
         super.addEvent();
         _loc1_ = 0;
         while(_loc1_ < 4)
         {
            _mainUI["tab" + _loc1_].addEventListener(MouseEvent.CLICK,this.onClickTab);
            _mainUI["tab" + _loc1_].addEventListener(MouseEvent.ROLL_OVER,this.onOver);
            _mainUI["tab" + _loc1_].addEventListener(MouseEvent.ROLL_OUT,this.onOut);
            _mainUI["tab" + _loc1_].buttonMode = true;
            _mainUI["tab" + _loc1_].gotoAndStop(1);
            _loc1_++;
         }
         PetManager.addEventListener(PetEvent.CURE_ONE_COMPLETE,this.onUpDate0);
         PetManager.addEventListener(PetEvent.STORAGE_ADDED,this.onUpDate1);
         PetManager.addEventListener(PetEvent.SET_DEFAULT,this.onUpDate2);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onUpDateItem);
         SocketConnection.addCmdListener(CommandID.SET_PET_CONST_FORM,this.onUpDateItem);
         SocketConnection.addCmdListener(CommandID.EAT_SPECIAL_MEDICINE,this.onEatSplItem);
         SocketConnection.addCmdListener(CommandID.UP_GRADE_MEDICINE,this.onEatUpItem);
         _mainUI["book"].addEventListener(MouseEvent.CLICK,this.onClickBook);
         this.mc0["feature"].mouseChildren = this.mc0["characterMC"].mouseChildren = this.mc0["dvMC"].mouseChildren = false;
         this.mc0["feature"].buttonMode = this.mc0["characterMC"].buttonMode = this.mc0["dvMC"].buttonMode = true;
         this.mc0["dvMC"].addEventListener(MouseEvent.CLICK,this.onClickDv);
         this.mc0["characterMC"].addEventListener(MouseEvent.CLICK,this.onClickCh);
         this.mc0["feature"].addEventListener(MouseEvent.CLICK,this.onClickFe);
         ToolTipManager.add(this.mc0["dvMC"],"范围0--31");
         this.mc0["improveAbilityBtn"].addEventListener(MouseEvent.CLICK,this.onImproveAbilityBtnClick);
         ToolTipManager.add(this.mc0["skillAwakeBtn"],"成为超能NONO后在背包中就可以替换精灵技能咯！");
         this.mc0["skillAwakeBtn"].addEventListener(MouseEvent.CLICK,this.onSkillAwakeBtnClick);
      }
      
      private function onUpDateItem(param1:Event) : void
      {
         if(isChangeSkillInBag)
         {
            this.setList(this.focusIndex,this.currentTab);
            isChangeSkillInBag = false;
         }
         else
         {
            this.setList(this.focusIndex,2);
         }
      }
      
      private function onUpDate0(param1:PetEvent) : void
      {
         this.setList(this.focusIndex);
      }
      
      private function onUpDate1(param1:PetEvent) : void
      {
         if(this.focusIndex != 0)
         {
            return;
         }
         this.setList(0);
         _mainUI.mouseEnabled = true;
         _mainUI.mouseChildren = true;
      }
      
      private function onUpDate2(param1:PetEvent) : void
      {
         this.setList(0,this.currentTab);
         _mainUI.mouseEnabled = true;
         _mainUI.mouseChildren = true;
      }
      
      private function onClickBook(param1:Event) : void
      {
         MonsterBook.loadPanel(7);
      }
      
      private function onOver(param1:Event) : void
      {
         param1.currentTarget.gotoAndStop(2);
      }
      
      private function onOut(param1:Event) : void
      {
         param1.currentTarget.gotoAndStop(1);
      }
      
      private function onClickTab(param1:Event) : void
      {
         this.currentTab = uint(param1.currentTarget.name.slice(3));
      }
      
      public function setList(param1:uint, param2:uint = 0) : void
      {
         var _loc4_:int = 0;
         var _loc6_:PetInfo = null;
         var _loc7_:PetBagListItemNew = null;
         var _loc8_:Sprite = null;
         var _loc3_:Array = PetManager.infos;
         _loc3_.sortOn("isDefault",Array.DESCENDING);
         var _loc5_:int = Math.min(6,PetManager.length);
         this._petList = [];
         DisplayUtil.removeAllChild(_mainUI["petCon"]);
         _loc4_ = 0;
         while(_loc4_ < _loc5_)
         {
            _loc6_ = _loc3_[_loc4_] as PetInfo;
            _loc7_ = new PetBagListItemNew();
            if(_loc4_ == 0)
            {
               _loc7_._mainUI = UIManager.getMovieClip("DefaultPetItem_UI");
            }
            else
            {
               _loc7_._mainUI = UIManager.getMovieClip("PetItem_UI");
            }
            _loc7_.info = _loc6_;
            _loc7_._mainUI.gotoAndStop(1);
            _loc7_.show();
            _loc7_._mainUI["nameText"].visible = true;
            _loc7_._mainUI["lvTitle"].visible = true;
            _loc7_._mainUI["level"].visible = true;
            _loc7_._mainUI["bloodText"].visible = true;
            _mainUI["petCon"].addChild(_loc7_);
            _loc7_.x = _loc4_ * 100;
            _loc7_.y = 0;
            _loc7_.buttonMode = true;
            _loc7_.addEventListener(MouseEvent.CLICK,this.onClickPet);
            this._petList.push(_loc7_);
            _loc4_++;
         }
         _loc4_ = _loc5_;
         while(_loc4_ < 6)
         {
            _loc6_ = _loc3_[_loc4_] as PetInfo;
            _loc7_ = new PetBagListItemNew();
            if(_loc4_ == 0)
            {
               _loc7_._mainUI = UIManager.getMovieClip("DefaultPetItem_UI");
            }
            else
            {
               _loc7_._mainUI = UIManager.getMovieClip("PetItem_UI");
            }
            _loc7_.show();
            _loc7_._mainUI.gotoAndStop(1);
            _loc7_._mainUI["nameText"].visible = false;
            _loc7_._mainUI["lvTitle"].visible = false;
            _loc7_._mainUI["level"].visible = false;
            _loc7_._mainUI["bloodText"].visible = false;
            _loc7_._mainUI["maskMC"].width = 0;
            _mainUI["petCon"].addChild(_loc7_);
            _loc7_.x = _loc4_ * 100;
            _loc7_.y = 0;
            _loc7_.buttonMode = false;
            _loc7_.removeEventListener(MouseEvent.CLICK,this.onClickPet);
            this._petList.push(_loc7_);
            _loc4_++;
         }
         if(_mainUI["content1"].numChildren == 0)
         {
            _loc4_ = 0;
            while(_loc4_ < 4)
            {
               (_loc8_ = UIManager.getSprite(this._winList[_loc4_])).visible = false;
               _mainUI["content1"].addChild(_loc8_);
               _loc4_++;
            }
         }
         this.mc0 = _mainUI["content1"].getChildAt(0);
         this.mc1 = _mainUI["content1"].getChildAt(1);
         this.mc2 = _mainUI["content1"].getChildAt(2);
         this.mc3 = _mainUI["content1"].getChildAt(3);
         if(_loc5_ == 0)
         {
            this.focusIndex = -1;
         }
         else
         {
            this.focusIndex = param1;
         }
         this.currentTab = param2;
      }
      
      private function onClickDv(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86054640);
         ModuleManager.showModule(ClientConfig.getAppModule("AssessorPanelNew"),"正在打开...","dv");
      }
      
      private function onClickCh(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86054644);
         ModuleManager.showModule(ClientConfig.getAppModule("AssessorPanelNew"),"正在打开...","nature");
      }
      
      private function onSkillAwakeBtnClick(param1:MouseEvent) : void
      {
         var _loc2_:PetInfo = null;
         if(!MainManager.actorInfo.isVip)
         {
            Alarm.show("成为超能NONO后在背包中就可以替换精灵技能咯！");
            return;
         }
         if(this._petList[this.focusIndex] != null)
         {
            _loc2_ = this._petList[this.focusIndex].info;
         }
         isChangeSkillInBag = true;
         ModuleManager.showModule(ClientConfig.getAppModule("SkillAwakePanel"),"正在加载技能唤醒仪....",_loc2_);
      }
      
      private function onImproveAbilityBtnClick(param1:MouseEvent) : void
      {
         var _loc2_:PetInfo = null;
         SocketConnection.send(1022,86067319);
         if(this._petList[this.focusIndex] != null)
         {
            _loc2_ = this._petList[this.focusIndex].info;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("BestQualityPetDevelopMakePanel"),"正在打开",_loc2_.catchTime);
         this.hide();
      }
      
      private function onClickFe(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86054648);
         ModuleManager.showModule(ClientConfig.getAppModule("PetEffectGuidePanel"));
      }
      
      private function setInfos() : void
      {
         var _loc1_:int = 0;
         var _loc2_:PetInfo = null;
         var _loc3_:String = null;
         var _loc4_:PetEffectInfo = null;
         var _loc5_:PetEffectInfo = null;
         var _loc6_:PetEffectInfo = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc9_:String = null;
         var _loc10_:NormalSkillBtnNew = null;
         if(this._petList[this.focusIndex] != null)
         {
            _loc2_ = this._petList[this.focusIndex].info;
         }
         if(_loc2_ == null)
         {
            this.focusIndex = -1;
            return;
         }
         if(_loc2_.id < 10)
         {
            _loc3_ = "00" + _loc2_.id;
         }
         else if(_loc2_.id >= 10 && _loc2_.id < 100)
         {
            _loc3_ = "0" + _loc2_.id;
         }
         else
         {
            _loc3_ = String(_loc2_.id.toString());
         }
         this.mc0["id"].text = _loc3_;
         this.mc0["level"].text = _loc2_.level.toString();
         this.mc0["characterMC"]["character"].text = NatureXMLInfo.getName(_loc2_.nature);
         ToolTipManager.remove(this.mc0["characterMC"]);
         ToolTipManager.add(this.mc0["characterMC"],NatureXMLInfo.getDes(_loc2_.nature));
         this.mc0["exp"].text = (_loc2_.nextLvExp - _loc2_.exp).toString();
         _loc1_ = 0;
         while(_loc1_ < _loc2_.effectList.length)
         {
            if((_loc6_ = _loc2_.effectList[_loc1_] as PetEffectInfo).effectID != 177)
            {
               if(_loc6_.status == 1 || _loc6_.status == 4)
               {
                  if(_loc6_.effectID > 400 && _loc6_.effectID <= 420)
                  {
                     _loc5_ = _loc6_;
                  }
                  else
                  {
                     _loc4_ = _loc6_;
                  }
               }
            }
            _loc1_++;
         }
         if(_loc4_)
         {
            _loc7_ = int(PetEffectXMLInfo.getStarLevel(_loc4_.effectID,_loc4_.args));
            _loc8_ = String(PetEffectXMLInfo.getEffect(_loc4_.effectID,_loc4_.args));
            _loc9_ = String(PetEffectXMLInfo.getIntros(_loc8_).getValue(_loc7_));
            EffectInfoTips.setup(this.mc0["feature"],_loc8_,_loc7_,_loc9_);
         }
         else
         {
            EffectInfoTips.setup(this.mc0["feature"],"无",0,"");
         }
         this.mc0["dvMC"]["dv"].text = _loc2_.dv;
         if(_loc5_)
         {
            this.mc0["special"].text = PetEffectXMLInfo.getEffect(_loc5_.effectID,_loc5_.args);
            ToolTipManager.add(this.mc0["special"],PetEffectXMLInfo.getEffectDes(_loc5_.effectID,_loc5_.args));
            this.mc0["special"].visible = true;
            this.mc0["specialTitle"].visible = true;
         }
         else
         {
            this.mc0["special"].visible = false;
            this.mc0["specialTitle"].visible = false;
            ToolTipManager.remove(this.mc0["special"]);
         }
         if(this._skillBtnArray)
         {
            this.clearOldBtn();
         }
         _loc1_ = 0;
         while(_loc1_ < 4)
         {
            if(_loc1_ < _loc2_.skillNum)
            {
               (_loc10_ = new NormalSkillBtnNew(_loc1_ + 1,_loc2_.skillArray[_loc1_].id,_loc2_.skillArray[_loc1_].pp)).petInfo = _loc2_;
               _loc10_.x = uint(_loc1_ % 2) == 1 ? 154.35 : 9.55;
               _loc10_.y = uint(_loc1_ / 2) == 1 ? 131.2 : 85.7;
               if(_loc2_.skillArray[_loc1_].id == 12867)
               {
                  if(MainManager.actorModel.isClothTianshen())
                  {
                     _loc10_.filters = [new GlowFilter(16711680)];
                  }
               }
               this._skillBtnArray.push(_loc10_);
               this.mc0.addChild(_loc10_);
            }
            else
            {
               (_loc10_ = new NormalSkillBtnNew(_loc1_ + 1)).x = uint(_loc1_ % 2) == 1 ? 154.35 : 9.55;
               _loc10_.y = uint(_loc1_ / 2) == 1 ? 131.2 : 85.7;
               this._skillBtnArray.push(_loc10_);
               this.mc0.addChild(_loc10_);
            }
            _loc1_++;
         }
         KTool.showScore(this.mc1["atk"],_loc2_.attack);
         KTool.showScore(this.mc1["ev_atk"],_loc2_.ev_attack);
         KTool.showScore(this.mc1["def"],_loc2_.defence);
         KTool.showScore(this.mc1["ev_def"],_loc2_.ev_defence);
         KTool.showScore(this.mc1["satk"],_loc2_.s_a);
         KTool.showScore(this.mc1["ev_satk"],_loc2_.ev_sa);
         KTool.showScore(this.mc1["sdef"],_loc2_.s_d);
         KTool.showScore(this.mc1["ev_sdef"],_loc2_.ev_sd);
         KTool.showScore(this.mc1["spd"],_loc2_.speed);
         KTool.showScore(this.mc1["ev_spd"],_loc2_.ev_sp);
         KTool.showScore(this.mc1["sta"],_loc2_.hp);
         KTool.showScore(this.mc1["ev_sta"],_loc2_.ev_hp);
         PetPropAddController.showAddMcTips(this.mc1["atk"],_loc2_,0);
         PetPropAddController.showAddMcTips(this.mc1["def"],_loc2_,1);
         PetPropAddController.showAddMcTips(this.mc1["satk"],_loc2_,2);
         PetPropAddController.showAddMcTips(this.mc1["sdef"],_loc2_,3);
         PetPropAddController.showAddMcTips(this.mc1["spd"],_loc2_,4);
         PetPropAddController.showAddMcTips(this.mc1["sta"],_loc2_,5);
         this.mc3["petHeight"].text = PetBookXMLInfo.getHeight(_loc2_.id) + "cm";
         this.mc3["weight"].text = PetBookXMLInfo.getWeight(_loc2_.id) + "kg";
         this.mc3["des"].text = "  " + PetBookXMLInfo.getFeatures(_loc2_.id);
         this.mc3["catchTime"].text = StringUtil.timeFormat(_loc2_.catchTime);
         this.mc3["sound"].addEventListener(MouseEvent.CLICK,this.onClickSound);
         if(PetBookXMLInfo.hasSound(_loc2_.id))
         {
            this.mc3["sound"].mouseEnabled = true;
            this.mc3["sound"].filters = null;
         }
         else
         {
            this.mc3["sound"].mouseEnabled = false;
            this.mc3["sound"].filters = [ColorFilter.setGrayscale()];
         }
      }
      
      private function onClickSound(param1:Event) : void
      {
         if(this._channel)
         {
            this._channel.stop();
            this._channel = null;
            this._sound = null;
         }
         this._sound = new Sound();
         this._sound.load(new URLRequest(ClientConfig.getResPath("pet/sound/" + this._petList[this.focusIndex].info.id + ".mp3")));
         this._channel = this._sound.play();
      }
      
      private function onClickPet(param1:Event) : void
      {
         this.focusIndex = this._petList.indexOf(param1.currentTarget);
      }
      
      private function setButton() : void
      {
         _mainUI["followBtn"].addEventListener(MouseEvent.CLICK,this.onClickFollow);
         _mainUI["defaultBtn"].addEventListener(MouseEvent.CLICK,this.onClickDefault);
         ToolTipManager.add(_mainUI["defaultBtn"],"设为首发");
         _mainUI["cureBtn"].addEventListener(MouseEvent.CLICK,this.onClickCure);
         ToolTipManager.add(_mainUI["cureBtn"],"精灵恢复");
         _mainUI["storageBtn"].addEventListener(MouseEvent.CLICK,this.onClickStorage);
         ToolTipManager.add(_mainUI["storageBtn"],"放回仓库");
         _mainUI["cmBtn"].addEventListener(MouseEvent.CLICK,this.onClickCM);
         ToolTipManager.add(_mainUI["cmBtn"],"精灵刻印");
         _mainUI["skillStoneBtn"].addEventListener(MouseEvent.CLICK,this.onClickSkillStone);
         ToolTipManager.add(_mainUI["skillStoneBtn"],"技能石背包");
         _mainUI["petStorageBtn"].addEventListener(MouseEvent.CLICK,this.onClickPetStorage);
         ToolTipManager.add(_mainUI["petStorageBtn"],"精灵仓库");
         _mainUI["pictureBookBtn"].addEventListener(MouseEvent.CLICK,this.onClickHandBook);
         ToolTipManager.add(_mainUI["pictureBookBtn"],"精灵图鉴");
         _mainUI["change"].addEventListener(MouseEvent.CLICK,this.onChangePetBag);
      }
      
      private function onChangePetBag(param1:Event) : void
      {
         var flag:Boolean;
         var e:Event = param1;
         SocketConnection.send(1020,51);
         flag = Boolean(BufferRecordManager.getState(MainManager.actorInfo,245));
         BufferRecordManager.setState(MainManager.actorInfo,245,!flag,function():void
         {
            hide();
            PetBagControllerNew.showByBuffer();
         });
      }
      
      private function onClickHandBook(param1:Event) : void
      {
         PictureBookController.show();
         SocketConnection.send(1022,86053203);
      }
      
      private function onClickCM(param1:Event) : void
      {
         var e:Event = param1;
         _mainUI.mouseChildren = _mainUI.mouseEnabled = false;
         Alert.show("新刻印系统只有在新背包才能使用，是否切换到新精灵背包？",function():void
         {
            _mainUI.mouseChildren = _mainUI.mouseEnabled = true;
            PetBagControllerNew.show();
            ModuleManager.showModule(ClientConfig.getAppModule("ADPetBagPanelNew"));
         },function():void
         {
            _mainUI.mouseChildren = _mainUI.mouseEnabled = true;
         });
      }
      
      private function onClickDefault(param1:Event) : void
      {
         if(this.focusIndex >= 0 && this._petList[this.focusIndex] && Boolean(this._petList[this.focusIndex].info))
         {
            PetManager.setDefault(this._petList[this.focusIndex].info.catchTime);
         }
      }
      
      private function onClickSkillStone(param1:Event) : void
      {
         if(this.focusIndex >= 0 && this._petList[this.focusIndex] && Boolean(this._petList[this.focusIndex].info))
         {
            PetBagController._fromThis = true;
            ModuleManager.showModule(ClientConfig.getAppModule("SkillStoneBagPanel"),"正在打开技能石背包....",this._petList[this.focusIndex].info);
            this.hide();
         }
      }
      
      private function onClickPetStorage(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
      }
      
      private function onClickStorage(param1:Event) : void
      {
         if(Boolean(this._petList[this.focusIndex]) && this._petList[this.focusIndex].info != null)
         {
            _mainUI.mouseEnabled = false;
            _mainUI.mouseChildren = false;
            PetManager.bagToInStorage(this._petList[this.focusIndex].info.catchTime);
         }
      }
      
      private function onClickCure(param1:Event) : void
      {
         var e:Event = param1;
         if(this._petList[this.focusIndex])
         {
            if(MainManager.actorInfo.superNono != 1)
            {
               Alert.show("单个精灵体力恢复要花费20赛尔豆\r你是否要给<font color=\'#ff0000\'>" + PetXMLInfo.getName(this._petList[this.focusIndex].info.id) + "</font>恢复体力？",function():void
               {
                  PetManager.cure(_petList[focusIndex].info.catchTime);
               });
            }
            else
            {
               PetManager.cure(this._petList[this.focusIndex].info.catchTime);
            }
            this.setInfos();
         }
      }
      
      private function onClickFollow(param1:Event) : void
      {
         if(PetManager.length == 0)
         {
            Alarm.show("你还没有赛尔精灵！");
            return;
         }
         PetManager.showPet(this._petList[this.focusIndex].info.catchTime);
         if(_mainUI["followBtn"].currentFrame == 1)
         {
            _mainUI["followBtn"].gotoAndStop(2);
            ToolTipManager.add(_mainUI["followBtn"],"放入包内");
            this.hide();
         }
         else
         {
            _mainUI["followBtn"].gotoAndStop(1);
            ToolTipManager.add(_mainUI["followBtn"],"身边跟随");
         }
      }
      
      private function initPetProps() : void
      {
         if(this.focusIndex >= 0)
         {
            this._petPropsPanel.getPetInfo(this._petList[this.focusIndex].info);
         }
         else
         {
            this.currentTab = 0;
         }
      }
      
      private function clearOldBtn() : void
      {
         var _loc1_:NormalSkillBtnNew = null;
         for each(_loc1_ in this._skillBtnArray)
         {
            _loc1_.destroy();
            _loc1_ = null;
         }
         this._skillBtnArray = [];
      }
      
      override public function hide() : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(true,false);
         super.hide();
      }
      
      override protected function removeEvent() : void
      {
         var _loc1_:int = 0;
         super.removeEvent();
         _mainUI.visible = false;
         this.currentTab = 0;
         this.isOpen = true;
         _page = 1;
         if(this._skillBtnArray)
         {
            this.clearOldBtn();
         }
         if(this._petPropsPanel)
         {
            this._petPropsPanel.destroy();
         }
         if(this._petBagModel)
         {
            this._petBagModel.removeEvent();
         }
         PetManager.removeEventListener(PetEvent.CURE_ONE_COMPLETE,this.onUpDate0);
         PetManager.removeEventListener(PetEvent.STORAGE_ADDED,this.onUpDate1);
         PetManager.removeEventListener(PetEvent.SET_DEFAULT,this.onUpDate2);
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onUpDateItem);
         SocketConnection.removeCmdListener(CommandID.SET_PET_CONST_FORM,this.onUpDateItem);
         SocketConnection.removeCmdListener(CommandID.EAT_SPECIAL_MEDICINE,this.onEatSplItem);
         SocketConnection.removeCmdListener(CommandID.UP_GRADE_MEDICINE,this.onEatUpItem);
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
         _loc1_ = 0;
         while(_loc1_ < 4)
         {
            _mainUI["tab" + _loc1_].removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
            _mainUI["tab" + _loc1_].removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
            _mainUI["tab" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onClickTab);
            _loc1_++;
         }
         _mainUI["book"].removeEventListener(MouseEvent.CLICK,this.onClickBook);
         ToolTipManager.remove(this.mc0["characterMC"]);
         ToolTipManager.remove(_mainUI["followBtn"]);
         ToolTipManager.remove(this.mc0["dvMC"]);
         _mainUI["followBtn"].removeEventListener(MouseEvent.CLICK,this.onClickFollow);
         _mainUI["defaultBtn"].removeEventListener(MouseEvent.CLICK,this.onClickDefault);
         ToolTipManager.remove(_mainUI["defaultBtn"]);
         _mainUI["cureBtn"].removeEventListener(MouseEvent.CLICK,this.onClickCure);
         ToolTipManager.remove(_mainUI["cureBtn"]);
         _mainUI["storageBtn"].removeEventListener(MouseEvent.CLICK,this.onClickStorage);
         ToolTipManager.remove(_mainUI["storageBtn"]);
         _mainUI["cmBtn"].removeEventListener(MouseEvent.CLICK,this.onClickCM);
         ToolTipManager.remove(_mainUI["cmBtn"]);
         _mainUI["skillStoneBtn"].removeEventListener(MouseEvent.CLICK,this.onClickSkillStone);
         ToolTipManager.remove(_mainUI["skillStoneBtn"]);
         _mainUI["petStorageBtn"].removeEventListener(MouseEvent.CLICK,this.onClickPetStorage);
         ToolTipManager.remove(_mainUI["petStorageBtn"]);
         _mainUI["pictureBookBtn"].removeEventListener(MouseEvent.CLICK,this.onClickHandBook);
         ToolTipManager.remove(_mainUI["pictureBookBtn"]);
         _mainUI["change"].removeEventListener(MouseEvent.CLICK,this.onChangePetBag);
         ToolTipManager.remove(_mainUI["pictureBookBtn"]);
         this.mc0["dvMC"].removeEventListener(MouseEvent.CLICK,this.onClickDv);
         this.mc0["characterMC"].removeEventListener(MouseEvent.CLICK,this.onClickCh);
         this.mc0["feature"].removeEventListener(MouseEvent.CLICK,this.onClickFe);
         this.mc0["improveAbilityBtn"].removeEventListener(MouseEvent.CLICK,this.onImproveAbilityBtnClick);
         this.mc0["skillAwakeBtn"].removeEventListener(MouseEvent.CLICK,this.onSkillAwakeBtnClick);
         ToolTipManager.remove(this.mc0["skillAwakeBtn"]);
         isChangeSkillInBag = false;
      }
      
      private function setButtonStatus(param1:Boolean) : void
      {
         var _loc2_:Array = null;
         if(param1)
         {
            _loc2_ = null;
         }
         else
         {
            _loc2_ = [ColorFilter.setGrayscale()];
         }
         _mainUI["cureBtn"].filters = _loc2_;
         _mainUI["tab2"].mouseEnabled = param1;
         _mainUI["tab2"].filters = _loc2_;
         _mainUI["followBtn"].filters = _loc2_;
         _mainUI["storageBtn"].filters = _loc2_;
         _mainUI["defaultBtn"].filters = _loc2_;
         this.mc3["sound"].mouseEnabled = param1;
         this.mc3["sound"].filters = _loc2_;
         _mainUI["cmBtn"].filters = _loc2_;
         _mainUI["skillStoneBtn"].filters = _loc2_;
         if(!param1)
         {
            _mainUI["followBtn"].removeEventListener(MouseEvent.CLICK,this.onClickFollow);
            _mainUI["storageBtn"].removeEventListener(MouseEvent.CLICK,this.onClickStorage);
            _mainUI["defaultBtn"].removeEventListener(MouseEvent.CLICK,this.onClickDefault);
            _mainUI["cmBtn"].removeEventListener(MouseEvent.CLICK,this.onClickCM);
            _mainUI["cureBtn"].removeEventListener(MouseEvent.CLICK,this.onClickCure);
         }
         else
         {
            _mainUI["followBtn"].addEventListener(MouseEvent.CLICK,this.onClickFollow);
            _mainUI["storageBtn"].addEventListener(MouseEvent.CLICK,this.onClickStorage);
            _mainUI["defaultBtn"].addEventListener(MouseEvent.CLICK,this.onClickDefault);
            _mainUI["cmBtn"].addEventListener(MouseEvent.CLICK,this.onClickCM);
            _mainUI["cureBtn"].addEventListener(MouseEvent.CLICK,this.onClickCure);
         }
      }
      
      public function get focusIndex() : int
      {
         return this._focusIndex;
      }
      
      public function set focusIndex(param1:int) : void
      {
         var typeMC:SimpleButton;
         var info:PetInfo = null;
         var i:int = 0;
         var skillBtn:NormalSkillBtnNew = null;
         var evolvingLv:uint = 0;
         var evlToID:uint = 0;
         var evlFlag:uint = 0;
         var petArr:Array = null;
         var goldFlag:Boolean = false;
         var silverFlag:Boolean = false;
         var j:uint = 0;
         var j0:uint = 0;
         var effect0:PetEffectInfo = null;
         var index:uint = 0;
         var effect:PetEffectInfo = null;
         var index0:uint = 0;
         var effect_0:PetEffectInfo = null;
         var effectInfo:PetEffectInfo = null;
         var generation:MovieClip = null;
         var value:int = param1;
         this._focusIndex = value;
         if(this._focusIndex == -1)
         {
            this.setButtonStatus(false);
            DisplayUtil.removeAllChild(_mainUI["content0"]);
            _mainUI["nameText"].text = "";
            DisplayUtil.removeAllChild(_mainUI["type"]);
            DisplayUtil.removeAllChild(_mainUI["gender"]);
            this.mc0["id"].text = "";
            this.mc0["level"].text = "";
            this.mc0["characterMC"].visible = false;
            this.mc0["feature"].visible = false;
            this.mc0["special"].text = "";
            this.mc0["exp"].text = "";
            this.mc0["dvMC"].visible = false;
            KTool.showScore(this.mc1["atk"],0);
            KTool.showScore(this.mc1["ev_atk"],0);
            KTool.showScore(this.mc1["def"],0);
            KTool.showScore(this.mc1["ev_def"],0);
            KTool.showScore(this.mc1["satk"],0);
            KTool.showScore(this.mc1["ev_satk"],0);
            KTool.showScore(this.mc1["sdef"],0);
            KTool.showScore(this.mc1["ev_sdef"],0);
            KTool.showScore(this.mc1["spd"],0);
            KTool.showScore(this.mc1["ev_spd"],0);
            KTool.showScore(this.mc1["sta"],0);
            KTool.showScore(this.mc1["ev_sta"],0);
            this.mc3["petHeight"].text = "";
            this.mc3["weight"].text = "";
            this.mc3["catchTime"].text = "";
            this.mc3["des"].text = "";
            if(this._skillBtnArray)
            {
               this.clearOldBtn();
            }
            i = 0;
            while(i < 4)
            {
               skillBtn = new NormalSkillBtnNew(i + 1);
               skillBtn.x = uint(i % 2) == 1 ? 154.35 : 9.55;
               skillBtn.y = uint(i / 2) == 1 ? 131.2 : 85.7;
               this._skillBtnArray.push(skillBtn);
               this.mc0.addChild(skillBtn);
               i++;
            }
            _mainUI["evolutionMC"].visible = false;
            this.addEffectBg();
            return;
         }
         this.mc0["characterMC"].visible = true;
         this.mc0["dvMC"].visible = true;
         this.setButtonStatus(true);
         info = this._petList[this.focusIndex].info;
         _mainUI["nameText"].text = PetXMLInfo.getName(info.id);
         ResourceManager.getResource(ClientConfig.getPetSwfPath(info.id,info.catchTime),function(param1:DisplayObject):void
         {
            var _loc3_:MovieClip = null;
            var _loc2_:MovieClip = param1 as MovieClip;
            KTool.scaleByRect(_loc2_,168,170,2.5);
            DisplayUtil.removeAllChild(_mainUI["content0"]);
            _mainUI["content0"].addChild(_loc2_);
            switch(info.abilityType)
            {
               case 10:
                  _loc3_ = UIManager.getMovieClip("RedAbilityPetBright");
                  break;
               case 20:
                  _loc3_ = UIManager.getMovieClip("BlueAbilityPetBright");
                  break;
               case 32:
                  _loc3_ = UIManager.getMovieClip("YellowAbilityPetBright");
            }
            if(_loc3_)
            {
               _loc3_.scaleX = _loc3_.scaleY = 1.2;
               _mainUI["content0"].addChild(_loc3_);
            }
         },"pet");
         PetGenderIconManager.addIcon(_mainUI["gender"],new Point(0,0),PetXMLInfo.getPetGender(info.id));
         typeMC = UIManager.getButton("Icon_PetType_" + PetXMLInfo.getType(info.id));
         DisplayUtil.removeAllChild(_mainUI["type"]);
         _mainUI["type"].addChild(typeMC);
         this.setInfos();
         i = 0;
         while(i < 6)
         {
            if(i == this.focusIndex)
            {
               this._petList[i]._mainUI.gotoAndStop(2);
            }
            else
            {
               this._petList[i]._mainUI.gotoAndStop(1);
            }
            i++;
         }
         if(Boolean(PetManager.showInfo) && PetManager.showInfo.catchTime == info.catchTime)
         {
            _mainUI["followBtn"].gotoAndStop(2);
            ToolTipManager.add(_mainUI["followBtn"],"放入包内");
         }
         else
         {
            _mainUI["followBtn"].gotoAndStop(1);
            ToolTipManager.add(_mainUI["followBtn"],"身边跟随");
         }
         if(this.focusIndex == 0)
         {
            _mainUI["defaultBtn"].removeEventListener(MouseEvent.CLICK,this.onClickDefault);
            _mainUI["defaultBtn"].filters = [ColorFilter.setGrayscale()];
         }
         else
         {
            _mainUI["defaultBtn"].addEventListener(MouseEvent.CLICK,this.onClickDefault);
            _mainUI["defaultBtn"].filters = null;
         }
         ToolTipManager.add(_mainUI["evolutionMC"],"");
         if(info.id == 55)
         {
            _mainUI["evolutionMC"].visible = false;
         }
         else
         {
            evolvingLv = uint(PetXMLInfo.getEvolvingLv(info.id));
            evlToID = uint(PetXMLInfo.getEvolvesTo(info.id));
            evlFlag = uint(PetXMLInfo.getEvolvFlag(info.id));
            _mainUI["evolutionMC"].visible = true;
            if(evlToID != 0)
            {
               _mainUI["evolutionMC"].mouseEnabled = true;
               _mainUI["evolutionMC"].gotoAndStop(1);
               ToolTipManager.add(_mainUI["evolutionMC"],evolvingLv + "级进化为" + PetXMLInfo.getName(evlToID) + "。");
            }
            else if(evlFlag == 0)
            {
               _mainUI["evolutionMC"].mouseEnabled = false;
               _mainUI["evolutionMC"].gotoAndStop(2);
               ToolTipManager.remove(_mainUI["evolutionMC"]);
            }
            else
            {
               _mainUI["evolutionMC"].mouseEnabled = true;
               _mainUI["evolutionMC"].gotoAndStop(3);
               ToolTipManager.add(_mainUI["evolutionMC"],evolvingLv + "级在实验室进化舱进化。");
            }
         }
         ToolTipManager.remove(this._petEffect);
         this._petEffect = null;
         DisplayUtil.removeAllChild(_mainUI["effect"]);
         DisplayUtil.removeAllChild(_mainUI["moon"]);
         if(info.id == 1114 || info.id == 1115)
         {
            if(KTool.checkPetInBag(1155) || KTool.checkPetInBag(1156))
            {
               this._petEffect = UIManager.getSprite("icon_wolf");
               if(this._petEffect)
               {
                  _mainUI["effect"].addChild(this._petEffect);
                  ToolTipManager.add(this._petEffect,"血狼一族（体力上限+50）");
               }
            }
         }
         else if(info.id == 1155 || info.id == 1156)
         {
            if(KTool.checkPetInBag(1114) || KTool.checkPetInBag(1115))
            {
               this._petEffect = UIManager.getSprite("icon_wolf");
               if(this._petEffect)
               {
                  _mainUI["effect"].addChild(this._petEffect);
                  ToolTipManager.add(this._petEffect,"血狼一族（体力上限+50）");
               }
            }
         }
         else if(info.id == 261 || info.id == 1845)
         {
            SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffect);
            SocketConnection.send(CommandID.M_2149);
         }
         else if(info.id == 875 || info.id == 2341)
         {
            SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
            SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE);
         }
         else if(info.id == 798)
         {
            SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
            SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,0);
         }
         else if(info.id == 597 || info.id == 599)
         {
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
            SocketConnection.send(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,info.catchTime);
         }
         else if(PetBagControllerNew.xteamPetArr.indexOf(info.id) != -1)
         {
            if(PetBagControllerNew.isHasXteamEffect)
            {
               this._petEffect = UIManager.getSprite("icon_xteam_wuxianzhanyi");
               ToolTipManager.add(this._petEffect,"无限战意");
               if(this._petEffect)
               {
                  DisplayUtil.removeAllChild(_mainUI["effect"]);
                  _mainUI["effect"].addChild(this._petEffect);
               }
            }
            else if(info.id == 1394 || info.id == 1395)
            {
               this._petEffect = UIManager.getSprite("icon_ruierka_jueduifangyu");
               ToolTipManager.add(this._petEffect,"绝对防御");
               if(this._petEffect)
               {
                  DisplayUtil.removeAllChild(_mainUI["effect"]);
                  _mainUI["effect"].addChild(this._petEffect);
               }
            }
         }
         else if(info.id == 928 || info.id == 929)
         {
            this._petEffect = UIManager.getSprite("icon_ruierka_jueduifangyu");
            if(this._petEffect)
            {
               _mainUI["effect"].addChild(this._petEffect);
               ToolTipManager.add(this._petEffect,"绝对防御");
            }
         }
         else if(info.id == 1019)
         {
            this._petEffect = UIManager.getSprite("icon_jiuweifox_zhong");
            if(this._petEffect)
            {
               _mainUI["effect"].addChild(this._petEffect);
               ToolTipManager.add(this._petEffect,"九尾重生");
            }
         }
         else if(info.id == 461 || info.id == 462 || info.id == 903 || info.id == 904)
         {
            this._petEffect = UIManager.getMovieClip("SpecialPet_Tip_Mc");
            DisplayUtil.removeAllChild(_mainUI["moon"]);
            _mainUI["moon"].addChild(this._petEffect);
            if(info.id == 461 || info.id == 462)
            {
               ToolTipManager.add(this._petEffect,"每当中秋节和每个月的22日，它将爆发出惊人的力量！");
            }
            if(info.id == 903 || info.id == 904)
            {
               ToolTipManager.add(this._petEffect,"每当中秋节和每个月的12日，它将爆发出惊人的力量！");
            }
         }
         else if(info.id == 1121 || info.id == 2429)
         {
            this._petEffect = UIManager.getMovieClip("Hun_Icon");
            DisplayUtil.removeAllChild(_mainUI["moon"]);
            _mainUI["moon"].addChild(this._petEffect);
            ToolTipManager.add(this._petEffect,"破魂：攻击时一定概率额外附加伤害！");
         }
         else if(info.id == 1122)
         {
            this._petEffect = UIManager.getMovieClip("Xiang_Icon");
            DisplayUtil.removeAllChild(_mainUI["moon"]);
            _mainUI["moon"].addChild(this._petEffect);
            ToolTipManager.add(this._petEffect,"翱翔：攻击时一定概率提升自身速度等级！");
         }
         else if(info.id == 1178 || info.id == 1179)
         {
            this._petEffect = UIManager.getMovieClip("icon_mengqike_jin");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"火眼金睛");
         }
         else if(info.id == 1211 || info.id == 1212)
         {
            this._petEffect = UIManager.getMovieClip("icon_1212");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"每回合5%概率令对手麻痹");
         }
         else if(info.id == 1226 || info.id == 1227)
         {
            if(MainManager.actorModel.isClothTianshen())
            {
               this._petEffect = UIManager.getMovieClip("icon_1226");
               if(this._petEffect)
               {
                  DisplayUtil.removeAllChild(_mainUI["effect"]);
                  this._petEffect.width = 30;
                  this._petEffect.height = 28;
                  _mainUI["effect"].addChild(this._petEffect);
               }
               ToolTipManager.add(this._petEffect,"天光烈袭威力提升至160");
            }
         }
         else if(info.id == 1238)
         {
            this._petEffect = UIManager.getMovieClip("icon_1238");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 30;
               this._petEffect.height = 28;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"每回合10%概率令对手烧伤");
         }
         else if(info.id == 70 || info.id == 2394)
         {
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
            SocketConnection.send(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,info.catchTime);
         }
         else if(info.id == 1259 || info.id == 1260)
         {
            this._petEffect = UIManager.getMovieClip("icon_1259");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 30;
               this._petEffect.height = 28;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"进入战斗一定概率速度提升1个等级");
         }
         else if(info.id == 1279)
         {
            this._petEffect = UIManager.getMovieClip("icon_1279");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 30;
               this._petEffect.height = 28;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"5%几率令对手属性技能失效");
         }
         else if(info.id == 1287 || info.id == 1288)
         {
            this._petEffect = UIManager.getMovieClip("icon_1287");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 30;
               this._petEffect.height = 28;
               _mainUI["effect"].addChild(this._petEffect);
            }
            if(AngelEvilController.allHave)
            {
               ToolTipManager.add(this._petEffect,"每回合50%概率消除害怕状态");
            }
            else
            {
               ToolTipManager.add(this._petEffect,"每回合40%概率消除害怕状态");
            }
         }
         else if(info.id == 1289 || info.id == 1290)
         {
            this._petEffect = UIManager.getMovieClip("icon_1289");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 30;
               this._petEffect.height = 28;
               _mainUI["effect"].addChild(this._petEffect);
            }
            if(AngelEvilController.allHave)
            {
               ToolTipManager.add(this._petEffect,"每回合50%概率消除疲惫状态");
            }
            else
            {
               ToolTipManager.add(this._petEffect,"每回合40%概率消除疲惫状态");
            }
         }
         else if(info.id == 1317)
         {
            this._petEffect = UIManager.getMovieClip("icon_1317");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 41;
               this._petEffect.height = 40;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"令对手每回合额外增加10%冻伤概率");
         }
         else if(info.effectList.length > 0 && this.haveLingGuangEffect(info.effectList) && (info.id == 811 || info.id == 810 || info.id == 809))
         {
            this._petEffect = UIManager.getSprite("icon_811");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 41;
               this._petEffect.height = 40;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"草系技能威力提升5%");
         }
         else if(info.effectList.length > 0 && this.haveMaiErSiEffect(info.effectList) && (info.id == 1203 || info.id == 1204))
         {
            this._petEffect = UIManager.getMovieClip("icon_1203");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 41;
               this._petEffect.height = 40;
               _mainUI["effect"].addChild(this._petEffect);
               ToolTipManager.add(this._petEffect,"反弹1/8伤害");
            }
         }
         else if(info.id == 1481 || info.id == 1482 || info.id == 1498 || info.id == 1499)
         {
            this._petEffect = UIManager.getSprite("icon_1481");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 31;
               this._petEffect.height = 30;
               _mainUI["effect"].addChild(this._petEffect);
               petArr = PetManager.getBagMap();
               goldFlag = false;
               silverFlag = false;
               j = 0;
               while(j < petArr.length)
               {
                  if((petArr[j] as PetListInfo).id == 1481 || (petArr[j] as PetListInfo).id == 1482)
                  {
                     goldFlag = true;
                  }
                  if((petArr[j] as PetListInfo).id == 1498 || (petArr[j] as PetListInfo).id == 1499)
                  {
                     silverFlag = true;
                  }
                  j++;
               }
               if(goldFlag && silverFlag)
               {
                  (this._petEffect as MovieClip).gotoAndStop(1);
               }
               else
               {
                  (this._petEffect as MovieClip).gotoAndStop(2);
               }
            }
            ToolTipManager.add(this._petEffect,"先手攻击");
         }
         else if(info.id == 1535 || info.id == 1536)
         {
            this._petEffect = UIManager.getSprite("icon_1536");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 31;
               this._petEffect.height = 30;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"受到攻击将消除对手能力强化状态");
         }
         else if((info.id == 1731 || info.id == 1732) && info.effectList.length > 0 && this.haveDarkGodEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_1732");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 41;
               this._petEffect.height = 40;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"出战时，若首回合受到致命伤害则保留1点体力");
         }
         else if((info.id == 1864 || info.id == 1865) && info.effectList.length > 0 && this.haveScareEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_1865_1864");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"出战时，首回合免疫所有异常状态");
         }
         else if((info.id == 1910 || info.id == 1909) && info.effectList.length > 0 && this.haveLukasiEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_1910_1909");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"登场后每三回合，必定获得一次致命一击效果");
         }
         else if(info.id == 2206 || info.id == 2207)
         {
            this._petEffect = UIManager.getSprite("icon_2206_2207");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"自身满体力值时免疫能力下降类技能");
         }
         else if(info.id == 2218 || info.id == 2219)
         {
            this._petEffect = UIManager.getSprite("icon_2218_2219");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"对手使用先手技能时，自身免疫异常状态");
         }
         else if(info.id == 2322)
         {
            this._petEffect = UIManager.getSprite("icon_2322");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"所有特殊攻击必定命中");
         }
         else if(info.id == 2288 || info.id == 2289)
         {
            this._petEffect = UIManager.getSprite("icon_2288_2289");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"回合结束时解除自身的命中等级下降效果");
         }
         else if(info.id == 2260 || info.id == 2261)
         {
            this._petEffect = UIManager.getSprite("icon_2260_2261");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"出战时第一回合自身所有技能先制+1");
         }
         else if((info.id == 2118 || info.id == 2117) && info.effectList.length > 0 && this.haveAbosiEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_2118_2117");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"10%令对手害怕");
         }
         else if(info.effectList.length > 0 && this.haveRuiyaEffect(info.effectList) && (info.id == 2326 || info.id == 2327))
         {
            this._petEffect = UIManager.getSprite("icon_2326_2327");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"受到所有伤害减少5%");
         }
         else if(info.id == 1928 || info.id == 1929 || info.id == 1940 || info.id == 1941 || info.id == 1969 || info.id == 1970 || info.id == 2512 || info.id == 2520 || info.id == 2530)
         {
            KTool.getForeverNum(4060,function(param1:uint):void
            {
               var _loc2_:int = param1 % 2;
               var _loc3_:* = _loc2_ == 1;
               if(_loc3_)
               {
                  DebugTrace.show("含有此技能特性！这个是一个特殊处理的，实际不是技能特性，有疑问问后台！");
                  _petEffect = UIManager.getSprite("icon_1928_1929andSoOn");
                  if(_petEffect)
                  {
                     DisplayUtil.removeAllChild(_mainUI["effect"]);
                     _mainUI["effect"].addChild(_petEffect);
                  }
                  ToolTipManager.add(_petEffect,"背包内每存在一种三兄弟精灵时自身每回合回复15点体力(最多每回合回复45点)");
               }
            });
         }
         else if(info.id == 2132)
         {
            this._petEffect = UIManager.getSprite("icon_2132_2133");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"攻击时有1%的几率秒杀对手  组合加成未激活");
            j0 = 0;
            for(; j0 < info.effectList.length; j0++)
            {
               effect0 = info.effectList[j0];
               if(effect0.effectID != 151)
               {
                  continue;
               }
               switch(effect0.args)
               {
                  case "20 0":
                     ToolTipManager.add(this._petEffect,"攻击时有2%的几率秒杀对手  组合加成已激活");
                     break;
                  case "30 0":
                     ToolTipManager.add(this._petEffect,"攻击时有3%的几率秒杀对手  组合加成已激活");
                     break;
               }
            }
         }
         else if(info.id == 2163)
         {
            this._petEffect = UIManager.getSprite("icon_2163");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"攻击时有5%的几率另对手烧伤 PS：激活时几率为10%  组合加成未激活");
            index = 0;
            for(; index < info.effectList.length; index++)
            {
               effect = info.effectList[index];
               if(effect.effectID != 116)
               {
                  continue;
               }
               switch(effect.args)
               {
                  case "10 2":
                     ToolTipManager.add(this._petEffect,"攻击时有10%的几率烧伤对手  组合加成已激活");
                     break;
                  case "15 2":
                     ToolTipManager.add(this._petEffect,"攻击时有15%的几率烧伤对手  组合加成已激活");
                     break;
               }
            }
         }
         else if(info.id == 2190)
         {
            this._petEffect = UIManager.getSprite("icon_2190");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"攻击伤害提升1%，受到伤害减少1%。PS：激活时双项提升2%  组合加成未激活");
            index0 = 0;
            for(; index0 < info.effectList.length; index0++)
            {
               effect_0 = info.effectList[index0];
               if(effect_0.effectID != 203)
               {
                  continue;
               }
               switch(effect_0.args)
               {
                  case "2 2":
                     ToolTipManager.add(this._petEffect,"攻击伤害提升2%，受到伤害减少2%  组合加成已激活");
                     break;
                  case "3 3":
                     ToolTipManager.add(this._petEffect,"攻击伤害提升3%，受到伤害减少3%  组合加成已激活");
                     break;
               }
            }
         }
         else if((info.id == 2145 || info.id == 2146) && info.effectList.length > 0)
         {
            this._petEffect = UIManager.getSprite("icon_2145_2146");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"使用技能时，10%概率使自身速度提升1个等级");
         }
         else if((info.id == 2166 || info.id == 2167) && info.effectList.length > 0 && this.haveLongZunEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_bulaike_ni");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"上场第一回合免疫并反弹所有异常状态(每场战斗只能触发一次)");
         }
         else if((info.id == 2204 || info.id == 2205) && info.effectList.length > 0 && this.haveMeiEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_2204_2205");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"对手体力低于1/3时自身技能威力翻倍");
         }
         else if((info.id == 2125 || info.id == 2126 || info.id == 2052 || info.id == 2053 || info.id == 2012 || info.id == 2013 || info.id == 1948 || info.id == 1949 || info.id == 2034 || info.id == 2035 || info.id == 2099 || info.id == 2100) && info.effectList.length > 0 && this.haveChuangshiEffect(info.effectList))
         {
            this._petEffect = UIManager.getSprite("icon_1948_2126");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"创世六神兵合体特效，六项能力值全部+5");
         }
         else if(info.id == 2237 || info.id == 2236)
         {
            this.checkAsuya(info);
         }
         else if(info.id == 2235 || info.id == 2234)
         {
            this.checkLaaosi(info);
         }
         else if(info.id == 2189)
         {
            SocketConnection.sendWithCallback(CommandID.BATCH_GET_BITSET,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:int;
               if((_loc4_ = int(_loc2_.readUnsignedByte())) > 0)
               {
                  _petEffect = UIManager.getSprite("icon_2189");
                  if(_petEffect)
                  {
                     DisplayUtil.removeAllChild(_mainUI["effect"]);
                     _mainUI["effect"].addChild(_petEffect);
                  }
                  ToolTipManager.add(_petEffect,"处于能力提升状态时每回合恢复1/10体力值");
               }
            },1,16047);
         }
         else if(info.id == 2221)
         {
            SocketConnection.sendWithCallback(CommandID.BATCH_GET_BITSET,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:int;
               if((_loc4_ = int(_loc2_.readUnsignedByte())) > 0)
               {
                  _petEffect = UIManager.getSprite("icon_2221");
                  if(_petEffect)
                  {
                     DisplayUtil.removeAllChild(_mainUI["effect"]);
                     _mainUI["effect"].addChild(_petEffect);
                  }
                  ToolTipManager.add(_petEffect,"在战斗中 攻击和特攻等于其中最高的一项");
               }
            },1,16049);
         }
         else if(info.id == 2220)
         {
            SocketConnection.sendWithCallback(CommandID.BATCH_GET_BITSET,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:int;
               if((_loc4_ = int(_loc2_.readUnsignedByte())) > 0)
               {
                  _petEffect = UIManager.getSprite("icon_2220");
                  if(_petEffect)
                  {
                     DisplayUtil.removeAllChild(_mainUI["effect"]);
                     _mainUI["effect"].addChild(_petEffect);
                  }
                  ToolTipManager.add(_petEffect,"使用攻击技能时有30%几率使对手冻伤");
               }
            },1,16048);
         }
         else if(info.id == 2367 || info.id == 2368)
         {
            for each(effectInfo in info.effectList)
            {
               if(effectInfo.effectID == 177)
               {
                  this._petEffect = UIManager.getSprite("icon_2368");
                  if(this._petEffect)
                  {
                     DisplayUtil.removeAllChild(_mainUI["effect"]);
                     _mainUI["effect"].addChild(this._petEffect);
                  }
                  ToolTipManager.add(this._petEffect,"阿萨斯激活特效攻击力增加8%");
               }
            }
         }
         else if(info.id == 2265 || info.id == 2266)
         {
            this.checkBobite(info);
         }
         else if(info.id == 2267 || info.id == 2268)
         {
            this.checkLeiluoxi(info);
         }
         else if(info.id == 2278 || info.id == 2279)
         {
            this.checkNasili(info);
         }
         else if(info.id == 2280 || info.id == 2281)
         {
            this.checkJiaxiya(info);
         }
         else if(info.id == 2299 || info.id == 2298)
         {
            this.checkFalide(info);
         }
         else if(info.id == 2301 || info.id == 2300)
         {
            this.checkTipusi(info);
         }
         else if(info.id == 2309 || info.id == 2308)
         {
            this.checkSikepien(info);
         }
         else if(info.id == 2320 || info.id == 2321)
         {
            this.checkLuoqi(info);
         }
         else if(info.id == 2328 || info.id == 2329)
         {
            this.checkKamiou(info);
         }
         else if(info.id == 2339 || info.id == 2340)
         {
            this.checkFeierte(info);
         }
         else if(info.id == 2355 || info.id == 2357)
         {
            this.checkTigerLightAndShadow(info);
         }
         else if(info.id == 2359 || info.id == 2364)
         {
            this.chekBeinimi(info);
         }
         else if(info.id == 2333 || info.id == 2332)
         {
            this.check_2333(info);
         }
         else if(info.id == 2376 || info.id == 2375)
         {
            this.check_2376(info);
         }
         if(info.generation > 0)
         {
            generation = UIManager.getMovieClip("GenerIcon_Mc");
            DisplayUtil.removeAllChild(_mainUI["moon"]);
            _mainUI["moon"].addChild(generation);
         }
         this.upDateFollowState();
         this.showIcon(info.effectList.filter(function(param1:PetEffectInfo, param2:int, param3:Array):Boolean
         {
            return param1.status == 2;
         },info.effectList));
         if(Boolean(this._petPropsPanel) && this.currentTab == 2)
         {
            this.initPetProps();
         }
      }
      
      private function checkLaaosi(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_1226");
         this._petEffect.width = 30;
         this._petEffect.height = 28;
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"天枢星守护者拉奥斯专属特性 攻击+10，特防+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args)
            {
               case "0 10":
                  ToolTipManager.add(this._petEffect,"天枢星守护者拉奥斯专属特性 攻击+10，特防+10");
                  break;
               case "10 10 10":
                  ToolTipManager.add(this._petEffect,"天枢星守护者拉奥斯专属特性 进化 体力+10 攻击+10 防御+10 特防+10");
                  break;
            }
         }
      }
      
      private function checkAsuya(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_1910_1909");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"天府星守护者阿苏亚专属特性 攻击+10，防御+10");
         var _loc2_:uint = 0;
         while(_loc2_ < param1.effectList.length)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID == 247)
            {
               switch(_loc3_.args)
               {
                  case "0 10 10":
                     ToolTipManager.add(this._petEffect,"天府星守护者阿苏亚专属特性 攻击+10，防御+10");
               }
               if(_loc3_.args_6 == "10 10 0 10 10 0")
               {
                  ToolTipManager.add(this._petEffect,"天府星守护者阿苏亚专属特性 进化 攻击+10 速度+10 防御+10 特防+10");
               }
            }
            _loc2_++;
         }
      }
      
      private function check_2333(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         DisplayUtil.removeAllChild(_mainUI["effect"]);
         var _loc2_:uint = 0;
         while(_loc2_ < param1.effectList.length)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID == 247)
            {
               this._petEffect = UIManager.getSprite("icon_2333");
               if(this._petEffect)
               {
                  ToolTipManager.add(this._petEffect,"体力+11 防御+5 特防+5");
                  _mainUI["effect"].addChild(this._petEffect);
               }
            }
            _loc2_++;
         }
      }
      
      private function check_2376(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         DisplayUtil.removeAllChild(_mainUI["effect"]);
         var _loc2_:uint = 0;
         while(_loc2_ < param1.effectList.length)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID == 247)
            {
               this._petEffect = UIManager.getSprite("icon_2376");
               if(this._petEffect)
               {
                  ToolTipManager.add(this._petEffect,"体力+11 防御+5 特防+5");
                  _mainUI["effect"].addChild(this._petEffect);
               }
            }
            _loc2_++;
         }
      }
      
      private function checkLeiluoxi(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2268");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"南斗雷诺西专属特性 攻击+10，速度+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "10 0 0 0 10 0":
                  ToolTipManager.add(this._petEffect,"南斗雷诺西专属特性 攻击+10，速度+10");
                  break;
               case "10 10 0 10 10 0":
                  ToolTipManager.add(this._petEffect,"南斗雷诺西专属特性 进化 攻击+10 防御+10 特防+10 速度+10");
                  break;
            }
         }
      }
      
      private function checkFalide(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2299");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"法里德专属特性  防御+10 特防+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "0 10 0 10 0 25":
                  ToolTipManager.add(this._petEffect,"法里德专属特性 进化 防御+10 特防+10 体力+25");
                  break;
            }
         }
      }
      
      private function checkTipusi(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2301");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"提普斯专属特性 攻击+10 速度+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "10 0 0 0 15 10":
                  ToolTipManager.add(this._petEffect,"提普斯专属特性 进化 体力+10 攻击+10 速度+15");
                  break;
            }
         }
      }
      
      private function checkSikepien(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2309");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"斯科皮恩专属特性 体力+30");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "0 15 0 15 0 30":
                  ToolTipManager.add(this._petEffect,"南斗斯科皮恩专属特性 进化 防御+15 特防+15 体力+30");
                  break;
            }
         }
      }
      
      private function checkLuoqi(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2309");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"洛奇亚专属特性 特攻+5 防御+5 体力+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "0 10 10 0 5 10":
                  ToolTipManager.add(this._petEffect,"洛奇亚专属特性 特攻+10，防御+10，体力+10 ，速度+5");
                  break;
            }
         }
      }
      
      private function checkKamiou(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2329");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"卡米欧专属特性 特攻+10 体力+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "0 10 10 10 0 10":
                  ToolTipManager.add(this._petEffect,"卡米欧专属特性 特攻+10 体力+10 防御+10 特防+10");
                  break;
            }
         }
      }
      
      private function chekBeinimi(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2364");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"贝尼米专属特性 特攻+10 体力 +10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "0 0 10 0 0 10":
                  ToolTipManager.add(this._petEffect,"卡米欧专属特性 特攻+10 体力+10 防御+10 特防+10");
                  break;
            }
         }
      }
      
      private function checkFeierte(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2340");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"菲尔特专属特性 攻击+10 防御+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "10 10 0 10 10 0":
                  ToolTipManager.add(this._petEffect,"菲尔特专属特性 攻击+10 防御+10 速度+10 特防+10");
                  break;
            }
         }
      }
      
      private function checkTigerLightAndShadow(param1:PetInfo) : void
      {
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
         }
         if(param1.id == 2355 && param1.effectCount > 0)
         {
            this._petEffect = UIManager.getSprite("icon_2355");
            ToolTipManager.add(this._petEffect,"光之虎王专属特性 体力+10 特防+10 防御+5");
            _mainUI["effect"].addChild(this._petEffect);
         }
         else if(param1.id == 2357 && param1.effectCount > 0)
         {
            this._petEffect = UIManager.getSprite("icon_2357");
            ToolTipManager.add(this._petEffect,"影之虎王专属特性 体力+10 防御+10 特防+5");
            _mainUI["effect"].addChild(this._petEffect);
         }
      }
      
      private function checkNasili(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_nasili");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"北斗纳斯里专属特性 防御+10 特防+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "10 0 0 0 10 0":
                  ToolTipManager.add(this._petEffect,"北斗纳斯里专属特性 防御+10 特防+10");
                  break;
               case "10 10 0 10 0 10":
                  ToolTipManager.add(this._petEffect,"北斗纳斯里专属特性 进化 体力+10 攻击+10 防御+10 特防+10");
                  break;
            }
         }
      }
      
      private function checkJiaxiya(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_jiaxiya");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"南斗加西亚专属特性 攻击+10，速度+10");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "10 0 0 0 10 0":
                  ToolTipManager.add(this._petEffect,"南斗加西亚专属特性 攻击+10，速度+10");
                  break;
               case "10 10 0 0 10 10":
                  ToolTipManager.add(this._petEffect,"南斗加西亚专属特性 进化 体力+10 攻击+10 防御+10 速度+10 ");
                  break;
            }
         }
      }
      
      private function checkBobite(param1:PetInfo) : void
      {
         var _loc3_:PetEffectInfo = null;
         this._petEffect = UIManager.getSprite("icon_2266");
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
         ToolTipManager.add(this._petEffect,"博比特专属特性 攻击+15，特防+5");
         var _loc2_:uint = 0;
         for(; _loc2_ < param1.effectList.length; _loc2_++)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID != 247)
            {
               continue;
            }
            switch(_loc3_.args_6)
            {
               case "15 0 0 5 0 0":
                  ToolTipManager.add(this._petEffect,"博比特专属特性 攻击+15，特防+5");
                  break;
               case "15 5 0 0 10 10":
                  ToolTipManager.add(this._petEffect,"博比特专属特性进化体力+10攻击+15防御+5速度+10");
                  break;
            }
         }
      }
      
      private function haveLongZunEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 418)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveLingGuangEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 134)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveMaiErSiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 11)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveDarkGodEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 217)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveChuangshiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 137)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveMeiEffect(param1:Array) : Boolean
      {
         var _loc2_:uint = 0;
         while(_loc2_ < param1.length)
         {
            if((param1[_loc2_] as PetEffectInfo).effectID == 242)
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      private function haveScareEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 221)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveLukasiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 227)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveAbosiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 186)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function haveRuiyaEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 254)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function upDateFollowState() : void
      {
         if(PetManager.showInfo)
         {
            if(this._petList[this._focusIndex].info.catchTime == PetManager.showInfo.catchTime)
            {
               _mainUI["followBtn"].gotoAndStop(2);
               ToolTipManager.add(_mainUI["followBtn"],"放入包内");
            }
            else
            {
               _mainUI["followBtn"].gotoAndStop(1);
               ToolTipManager.add(_mainUI["followBtn"],"身边跟随");
            }
         }
         else
         {
            _mainUI["followBtn"].gotoAndStop(1);
            ToolTipManager.add(_mainUI["followBtn"],"身边跟随");
         }
      }
      
      private function checkHasEat(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Array = KTool.readDataByBits(_loc2_,32);
         if(_loc3_[0] == 1)
         {
            this._petEffect = UIManager.getSprite("icon_fanzhiji_lie");
            ToolTipManager.add(this._petEffect,"帮助烈刃一族必定繁殖出火刃");
         }
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
      }
      
      private function checkHasSuperLeiyi(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Array = KTool.readDataByBits(_loc2_,32);
         if(_loc3_[1] == 1)
         {
            this._petEffect = UIManager.getSprite("icon_70");
            ToolTipManager.add(this._petEffect,"电系技能伤害提升");
         }
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            this._petEffect.width = 30;
            this._petEffect.height = 28;
            _mainUI["effect"].addChild(this._petEffect);
         }
      }
      
      private function onEatSplItem(param1:SocketEvent) : void
      {
         var evt:SocketEvent = param1;
         SocketConnection.addCmdListener(CommandID.GET_PET_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GET_PET_INFO,arguments.callee);
            var _loc3_:PetInfo = param1.data as PetInfo;
            if(_loc3_.id == 904 || _loc3_.id == 462 || _loc3_.id == 916)
            {
               SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc3_.catchTime,_loc3_.id);
            }
            PetManager.upDate();
            setList(focusIndex,2);
         });
         SocketConnection.send(CommandID.GET_PET_INFO,this._petList[this._focusIndex].info.catchTime);
      }
      
      private function onEatUpItem(param1:SocketEvent) : void
      {
         var evt:SocketEvent = param1;
         SocketConnection.addCmdListener(CommandID.GET_PET_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GET_PET_INFO,arguments.callee);
            var _loc3_:PetInfo = param1.data as PetInfo;
            if(_loc3_.id == 904 || _loc3_.id == 462 || _loc3_.id == 916)
            {
               SocketConnection.send(CommandID.BUERSIGUANG_ATTRIBUTES_FIX,_loc3_.catchTime,_loc3_.id);
            }
            PetManager.upDate();
            setList(focusIndex,2);
         });
         SocketConnection.send(CommandID.GET_PET_INFO,this._petList[this._focusIndex].info.catchTime);
      }
      
      private function onGaiyaEffect(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_loc2_.defEffectID == 1)
         {
            this._petEffect = UIManager.getSprite("icon_gaiya_shixuezhili");
            ToolTipManager.add(this._petEffect,"嗜血之力");
         }
         else if(_loc2_.defEffectID == 2)
         {
            this._petEffect = UIManager.getSprite("icon_gaiya_xieqilingran");
            ToolTipManager.add(this._petEffect,"邪气凛然");
         }
         else if(_loc2_.defEffectID == 3)
         {
            this._petEffect = UIManager.getSprite("icon_gaiya_shipotianjing");
            ToolTipManager.add(this._petEffect,"石破天惊");
         }
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
      }
      
      private function onBulaikeEffect(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
         var _loc2_:BulaikeEffectInfo = param1.data as BulaikeEffectInfo;
         if(_loc2_.defEffectID == 1)
         {
            this._petEffect = UIManager.getSprite("icon_bulaike_kuang");
            ToolTipManager.add(this._petEffect,"狂之印");
         }
         else if(_loc2_.defEffectID == 2)
         {
            this._petEffect = UIManager.getSprite("icon_bulaike_ba");
            ToolTipManager.add(this._petEffect,"霸之体");
         }
         else if(_loc2_.defEffectID == 3)
         {
            this._petEffect = UIManager.getSprite("icon_bulaike_yi");
            ToolTipManager.add(this._petEffect,"意之念");
         }
         if(this._petEffect)
         {
            DisplayUtil.removeAllChild(_mainUI["effect"]);
            _mainUI["effect"].addChild(this._petEffect);
         }
      }
      
      private function onKaxiusiResult(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_)
         {
            this._petEffect = UIManager.getSprite("icon_798");
            if(this._petEffect)
            {
               DisplayUtil.removeAllChild(_mainUI["effect"]);
               this._petEffect.width = 31;
               this._petEffect.height = 30;
               _mainUI["effect"].addChild(this._petEffect);
            }
            ToolTipManager.add(this._petEffect,"狂攻之力");
         }
      }
      
      public function get currentTab() : uint
      {
         return this._currentTab;
      }
      
      public function set currentTab(param1:uint) : void
      {
         var _loc2_:int = 0;
         this._currentTab = param1;
         if(this._petPropsPanel)
         {
            this._petPropsPanel.destroy();
         }
         if(this._petBagModel)
         {
            this._petBagModel.removeEvent();
         }
         _mainUI["tab" + this._currentTab].removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         _mainUI["tab" + this._currentTab].removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
         _mainUI["tab" + this._currentTab].removeEventListener(MouseEvent.CLICK,this.onClickTab);
         _mainUI["tab" + this._currentTab].buttonMode = false;
         _mainUI["tab" + this._currentTab].gotoAndStop(3);
         _loc2_ = 0;
         while(_loc2_ < 4)
         {
            if(_loc2_ != this._currentTab)
            {
               _mainUI["tab" + _loc2_].addEventListener(MouseEvent.ROLL_OVER,this.onOver);
               _mainUI["tab" + _loc2_].addEventListener(MouseEvent.ROLL_OUT,this.onOut);
               _mainUI["tab" + _loc2_].addEventListener(MouseEvent.CLICK,this.onClickTab);
               _mainUI["tab" + _loc2_].buttonMode = true;
               _mainUI["tab" + _loc2_].gotoAndStop(1);
            }
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < 4)
         {
            if(_loc2_ == this._currentTab)
            {
               _mainUI["content1"].getChildAt(_loc2_).visible = true;
            }
            else
            {
               _mainUI["content1"].getChildAt(_loc2_).visible = false;
            }
            _loc2_++;
         }
         if(this._currentTab == 2)
         {
            this._petPropsPanel = new PetPropsPanelNew(this.mc2);
            this._petBagModel = new PetBagModelNew(this._petPropsPanel,_page);
            this.initPetProps();
         }
      }
   }
}
