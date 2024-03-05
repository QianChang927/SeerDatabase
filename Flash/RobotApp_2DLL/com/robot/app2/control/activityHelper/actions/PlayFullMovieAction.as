package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   
   public class PlayFullMovieAction extends BaseAction
   {
       
      
      public function PlayFullMovieAction(param1:*)
      {
         super(param1);
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var deferred:Deferred = null;
         var args:* = param1;
         var mvName:String = String(_data["mvName"]);
         deferred = new Deferred();
         var hasSound:Boolean = true;
         if(Boolean(_data["hasSound"]) && _data["hasSound"] == "0")
         {
            hasSound = false;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(mvName),function():void
         {
            deferred.resolve(null);
         },hasSound);
         return deferred.promise;
      }
   }
}
